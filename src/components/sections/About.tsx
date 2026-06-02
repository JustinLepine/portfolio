import data from ".."
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"
import { RepeatSkillReel as SkillReel } from "./SkillReel"

const aboutData = data.about

export default function About() {

    useIntersectionObserver('about', {
      threshold: 0.2,
      onIntersect: () => {
        const el = document.getElementById('about')
        if (el) el.style.opacity = '1'
      },
      onLeave: () => {
        const el = document.getElementById('about')
        if (el) el.style.opacity = '0'
      },
    })

  return (
    <div id="about">
      <SkillReel amount={3} />
      <section className="about" >
        <div className="about_card">
          <h3 className="about_heading">Hey, I'm Justin.</h3>
          <p className="about_bio">{ aboutData.main[0] }<br/><br/>{ aboutData.main[1] }</p>
          <div className="about_blocks">
            {aboutData.points.map(( point ) => { return (
              <div className="about_block" key={ point.label }>
                <span className="about_block-label">{ point.label }</span>
                <span className="about_block-value">{ point.value }</span>
              </div>
            )})}
          </div>
        </div>
      </section>
    </div>
  )
}
