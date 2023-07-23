import { ref, onUnmounted, onMounted, computed } from "vue";
import { filter } from "../utils/todoStorage";

const valueHash = ['all', 'completed', 'active']

export default function useFilter(todosRef) {
  let visibilityRef = ref('all')
  const onHashChange = () => {
    const hash  = location.hash.replace(/#\/?/,'')
    if (valueHash.includes(hash)) {
      visibilityRef.value = hash
    } else {
      console.log('hash改变了');
      location.hash = ''
      visibilityRef.value = 'all'
    }
  }

  onMounted(() => {
    window.addEventListener('hashchange', onHashChange)
  })

  onUnmounted(() => {
    window.removeEventListener('hashchange', onHashChange)
  })

  const filteredTodosRef = computed(() => {
    return filter(todosRef.value, visibilityRef.value)
  })

  const remainingRef = computed(() => {
    return filter(todosRef.value, 'active').length
  })

  const compeltedRef = computed(() => {
    return filter(todosRef.value, 'completed')
  })

  return {
    visibilityRef,
    filteredTodosRef,
    remainingRef,
    compeltedRef
  }
}