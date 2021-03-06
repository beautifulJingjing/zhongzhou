<template>
  <span>
    <transition
      :name="transition"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave">
      <div
        class="el-popover el-popper"
        :class="[popperClass, content && 'el-popover--plain']"
        ref="popper"
        v-show="!disabled && showPopper"
        :style="{ width: width + 'px' }"
        role="tooltip"
        :id="tooltipId"
        :aria-hidden="(disabled || !showPopper) ? 'true' : 'false'"
      >
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>
<script>
import Popper from '@/utils/vue-popper';
import { on, off } from '@/utils/dom';
import { addClass, removeClass } from '@/utils/dom';
import { generateId } from '@/utils';

export default {
  name: 'ElPopover',

  mixins: [Popper],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    openDelay: {
      type: Number,
      default: 0
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  computed: {
    tooltipId() {
      return `el-popover-${generateId()}`;
    }
  },
  watch: {
    showPopper(val) {
      if (this.disabled) {
        return;
      }
      val ? this.$emit('show') : this.$emit('hide');
    }
  },

  mounted() {
    let reference = this.referenceElm = this.reference || this.$refs.reference;
    const popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    // 可访问性
    if (reference) {
      addClass(reference, 'el-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', this.tabindex); // tab序列
      popper.setAttribute('tabindex', 0);

      if (this.trigger !== 'click') {
        on(reference, 'focusin', () => {
          this.handleFocus();
          const instance = reference.__vue__;
          if (instance && typeof instance.focus === 'function') {
            instance.focus();
          }
        });
        on(popper, 'focusin', this.handleFocus);
        on(reference, 'focusout', this.handleBlur);
        on(popper, 'focusout', this.handleBlur);
      }
      on(reference, 'keydown', this.handleKeydown);
      on(reference, 'click', this.handleClick);
    }
    if (this.trigger === 'click') {
      on(reference, 'click', this.doToggle);
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popper, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      if (this.tabindex < 0) {
        console.warn('[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key');
      }
      if (reference.querySelector('input, textarea')) {
        on(reference, 'focusin', this.doShow);
        on(reference, 'focusout', this.doClose);
      } else {
        on(reference, 'mousedown', this.doShow);
        on(reference, 'mouseup', this.doClose);
      }
    }
  },

  beforeDestroy() {
    this.cleanup();
  },

  deactivated() {
    this.cleanup();
  },

  methods: {
    doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow() {
      this.showPopper = true;
    },
    doClose() {
      this.showPopper = false;
    },
    handleFocus() {
      addClass(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = true;
    },
    handleClick() {
      removeClass(this.referenceElm, 'focusing');
    },
    handleBlur() {
      removeClass(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = false;
    },
    handleMouseEnter() {
      clearTimeout(this._timer);
      if (this.openDelay) {
        this._timer = setTimeout(() => {
          this.showPopper = true;
        }, this.openDelay);
      } else {
        this.showPopper = true;
      }
    },
    handleKeydown(ev) {
      if (ev.keyCode === 27 && this.trigger !== 'manual') { // esc
        this.doClose();
      }
    },
    handleMouseLeave() {
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this.showPopper = false;
      }, 200);
    },
    handleDocumentClick(e) {
      let reference = this.reference || this.$refs.reference;
      const popper = this.popper || this.$refs.popper;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return;
      this.showPopper = false;
    },
    handleAfterEnter() {
      this.$emit('after-enter');
    },
    handleAfterLeave() {
      this.$emit('after-leave');
      this.doDestroy();
    },
    cleanup() {
      if (this.openDelay) {
        clearTimeout(this._timer);
      }
    }
  },

  destroyed() {
    const reference = this.reference;

    off(reference, 'click', this.doToggle);
    off(reference, 'mouseup', this.doClose);
    off(reference, 'mousedown', this.doShow);
    off(reference, 'focusin', this.doShow);
    off(reference, 'focusout', this.doClose);
    off(reference, 'mousedown', this.doShow);
    off(reference, 'mouseup', this.doClose);
    off(reference, 'mouseleave', this.handleMouseLeave);
    off(reference, 'mouseenter', this.handleMouseEnter);
    off(document, 'click', this.handleDocumentClick);
  }
};
</script>
<style>
  .el-popper .popper__arrow, .el-popper .popper__arrow::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid
  }

  .el-popper .popper__arrow {
    border-width: 6px;
    -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03))
  }

  .el-popper .popper__arrow::after {
    content: " ";
    border-width: 6px
  }

  .el-popper[x-placement^=top] {
    margin-bottom: 12px
  }

  .el-popper[x-placement^=top] .popper__arrow {
    bottom: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-color: #EBEEF5;
    border-bottom-width: 0
  }

  .el-popper[x-placement^=top] .popper__arrow::after {
    bottom: 1px;
    margin-left: -6px;
    border-top-color: #FFF;
    border-bottom-width: 0
  }

  .el-popper[x-placement^=bottom] {
    margin-top: 12px
  }

  .el-popper[x-placement^=bottom] .popper__arrow {
    top: -6px;
    left: 50%;
    margin-right: 3px;
    border-top-width: 0;
    border-bottom-color: #EBEEF5
  }

  .el-popper[x-placement^=bottom] .popper__arrow::after {
    top: 1px;
    margin-left: -6px;
    border-top-width: 0;
    border-bottom-color: #FFF
  }

  .el-popper[x-placement^=right] {
    margin-left: 12px
  }

  .el-popper[x-placement^=right] .popper__arrow {
    top: 50%;
    left: -6px;
    margin-bottom: 3px;
    border-right-color: #EBEEF5;
    border-left-width: 0
  }

  .el-popper[x-placement^=right] .popper__arrow::after {
    bottom: -6px;
    left: 1px;
    border-right-color: #FFF;
    border-left-width: 0
  }

  .el-popper[x-placement^=left] {
    margin-right: 12px
  }

  .el-popper[x-placement^=left] .popper__arrow {
    top: 50%;
    right: -6px;
    margin-bottom: 3px;
    border-right-width: 0;
    border-left-color: #EBEEF5
  }

  .el-popper[x-placement^=left] .popper__arrow::after {
    right: 1px;
    bottom: -6px;
    margin-left: -6px;
    border-right-width: 0;
    border-left-color: #FFF
  }
</style>
