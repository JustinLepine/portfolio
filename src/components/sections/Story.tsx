import StoryCard from "./StoryCard"
import data from "../index.ts"
import { RepeatSkillReel as SkillReel } from "./SkillReel"

const timeline = data.timeline

export default function Story() {

  return (
    <div id="story">
      <SkillReel amount={3} />
      <section className="story" >
        {timeline.map((story) => (
          <StoryCard key={story.id} id={`story-${story.id}`} content={story.content} svgSrc={story.svgPath} />
        ))}
      </section>
      <SkillReel amount={3} />
    </div>
  )
}
