function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB", "Express"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;