import Logo from '../common/Logo'

function Footer() {
  return <footer id="contact"><Logo small /><span>&copy; {new Date().getFullYear()} KT's Shawarma &amp; Grill. Made with love.</span><a href="/#top">Back to top &uarr;</a></footer>
}

export default Footer
