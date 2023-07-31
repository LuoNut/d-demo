import { computed, ref, watch } from "vue";
import gsap from "gsap";

const color = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];
export default function useGdp(gdpRef, maxSize) {
  const maxValueRef = computed(() => {
    if (gdpRef.value.length) {
      return Math.max(...gdpRef.value.map((item) => item.value));
    }
  });
  const barsRef = ref([]);

  const barsTargetRef = computed(() => {
    return gdpRef.value.map((value, index) => ({
      ...value,
      color: color[index % color.length],
      size: (value.value / maxValueRef.value) * maxSize,
    }));
  });
  watch(barsTargetRef, () => {
    //将bars变化到barsTarget
    for (let i = 0; i < barsTargetRef.value.length; i++) {
      if (!barsRef.value[i]) {
        barsRef.value[i] = {
          ...barsTargetRef.value[i],
          value: 0,
          size: 0
        }
      }
      // barsRef.value[i] 中的属性逐步变化到 barsTargetRef.value[i]
      gsap.to(barsRef.value[i], {
        ...barsTargetRef.value[i],
        duration:1,
      })
    }
  })
  return {
    barsRef,
  };
}
