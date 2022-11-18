import { useEffect } from "react"

function useSetTitle(title) {

  useEffect(() => {
    document.title = `${title} | Next Components`
 }, [title]);

  return (
    <></>
  )
}

export default useSetTitle