import { Text, Column } from "lumina-design";
export default ({ ...props }) => {
  return (
    <section className='info-section intro-section'>
      <Column md={7} xs={12}>
        <div className='intro-text-section'>
          <Text type='h4'>Hi, I'm Indrajeet Ambadekar</Text>
          <Text type='h2' className='bold'>
            I'm a <em className='colored'>Full-Stack</em> experienced developer
          </Text>
          <Text type='b2'>
            I am a seasoned Full-Stack software engineer with deep hands-on
            experience with ReactJs, NodeJs and web development. I also have
            good hands-on experience with MySQL, MongoDB along with
            infrastructure knowledge on AWS cloud
          </Text>
        </div>
      </Column>
      <Column md={5} xs={12}>
        <div className='intro-big-img'></div>
      </Column>
    </section>
  );
};
