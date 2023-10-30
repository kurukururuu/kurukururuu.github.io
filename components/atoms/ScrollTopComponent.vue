<template>
  <div class="mouse_scroll" @click="$emit('click')">
    <div>
      <span class="m_scroll_arrows unu"></span>
      <span class="m_scroll_arrows doi"></span>
      <span class="m_scroll_arrows trei"></span>
    </div>

    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTopComponent',
}
</script>

<style scoped>
.mouse_scroll {
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
  margin-top: 125px;
}

.m_scroll_arrows {
  display: block;
  width: 16px;
  height: 16px;
  -ms-transform: rotate(-135deg); /* IE 9 */
  -webkit-transform: rotate(-135deg); /* Chrome, Safari, Opera */
  transform: rotate(-135deg);

  border-right: 2px solid white;
  border-bottom: 2px solid white;
  margin: 0 0 3px 4px;
}

.unu,
.doi,
.trei {
  -webkit-animation: mouse-scroll 1s infinite;
  -moz-animation: mouse-scroll 1s infinite;
  animation: mouse-scroll 1s infinite;
}

.unu {
  margin-top: 1px;
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -webkit-animation-direction: alternate;

  animation-direction: alternate;
  animation-delay: alternate;
}

.doi {
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -webkit-animation-direction: alternate;

  animation-delay: 0.2s;
  animation-direction: alternate;

  margin-top: -6px;
}

.trei {
  -webkit-animation-delay: 0.3s;
  -moz-animation-delay: 0.3s;
  -webkit-animation-direction: alternate;

  animation-delay: 0.3s;
  animation-direction: alternate;

  margin-top: -6px;
}

.mouse {
  height: 42px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid white;
  top: 170px;
}

.wheel {
  display: block;
  margin: 5px auto;
  background: white;
  position: relative;

  height: 4px;
  width: 4px;
  border: 2px solid #fff;
  -webkit-border-radius: 8px;
  border-radius: 8px;

  -webkit-animation: mouse-wheel 0.6s linear infinite;
  -moz-animation: mouse-wheel 0.6s linear infinite;
  animation: mouse-wheel 0.6s linear infinite;
}

@-webkit-keyframes mouse-wheel {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@-moz-keyframes mouse-wheel {
  0% {
    bottom: 1px;
  }
  25% {
    bottom: 2px;
  }
  50% {
    bottom: 3px;
  }
  75% {
    bottom: 2px;
  }
  100% {
    bottom: 1px;
  }
}
@-o-keyframes mouse-wheel {
  0% {
    bottom: 1px;
  }
  25% {
    bottom: 2px;
  }
  50% {
    bottom: 3px;
  }
  75% {
    bottom: 2px;
  }
  100% {
    bottom: 1px;
  }
}
@keyframes mouse-wheel {
  0% {
    bottom: 1px;
  }
  25% {
    bottom: 2px;
  }
  50% {
    bottom: 3px;
  }
  75% {
    bottom: 2px;
  }
  100% {
    bottom: 1px;
  }
}

@-webkit-keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
