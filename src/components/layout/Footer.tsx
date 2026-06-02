import commitIcon from '../../assets/icons/commit.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#">
        <img className="footer_icon" src={commitIcon} alt="Back to top" />
      </a>
    </footer>
  )
}
