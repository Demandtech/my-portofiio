import skillsData from "./skillsData";

function Skills() {
  return(
   <div className="skills-wrapper">
        {skillsData.map(skill => {
          const {name, icon, about} = skill
          return <article className="skill">
              <div className="icon-wrapper">
                 {icon}
              </div>
              <h4>{name}</h4>
              <p>{about}</p>
          </article>
        })}
   </div>
  )
}

export default Skills