interface IAboutProps {
  description: string;
  github: string;
}

const About = ({ description, github }: IAboutProps) => {
  return (
    <>
      {description}
      <br />
      You can learn more about me on Github: {github}
    </>
  );
};

export default About;
