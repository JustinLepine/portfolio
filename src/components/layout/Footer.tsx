import commitIcon from '../../assets/icons/commit.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/justinlepine" target="_blank" rel="noreferrer">
        <img className="footer_icon" src={commitIcon} alt="GitHub" />
      </a>
    </footer>
  )
}
