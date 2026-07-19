import Logo from '../common/Logo'

function Footer() {
  return <footer id="contact"><Logo small /><span>&copy; {new Date().getFullYear()} Aladdin Shawarma. Made with a pinch of magic.</span><a href="#top">Back to top &uarr;</a></footer>
}

export default Footer
