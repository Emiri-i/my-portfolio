import { useEffect, ForwardedRef, forwardRef } from "react"

const useIntersectionObserver = (
  elem: ForwardedRef<HTMLInputElement | null>
) => {
  useEffect(() => {
    if (elem) {
      const ref = (elem as React.MutableRefObject<HTMLInputElement>).current
      const observer = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active")
              return observer.unobserve(ref)
            }
          })
        }
      )
      observer.observe(ref)
    }
  }, [])
  return null
}
// )
export default useIntersectionObserver
