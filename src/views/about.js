import { Text, Column } from "lumina-design";
export default ({ ...props }) => {
  return (
    <section className='info-section intro-section'>
      <Column md={5} xs={12}>
        <div className='intro-big-img photo-2'></div>
      </Column>
      <Column md={7} xs={12}>
        <div className='intro-text-section'>
          <Text type='h4'>About me</Text>
          <Text type='h2' className='bold'>
            Indrajeet <em className='colored'>Ambadekar</em>
          </Text>
          <Text type='b2' className='medium-text'>
            I bring over a decade of hands-on expertise as a Software
            Engineering Manager, specializing in React.js, Node.js, AWS,
            microservices, and databases. With a proven track record, I have
            successfully led high-performing teams to deliver end-to-end
            projects on schedule and within budget. As a strong leader with a
            profound technical acumen, I am dedicated to fostering innovation
            and achieving exceptional results.
          </Text>
          <Text type='h4'>My Skills</Text>
          <div className='chip-cntnr'>
            <div className='chip'>ReactJs</div>
            <div className='chip'>HTML5</div>
            <div className='chip'>CSS3</div>
            <div className='chip'>SASS/LESS</div>
            <div className='chip'>Vanilla Javascript</div>
            <div className='chip'>Nodejs</div>
            <div className='chip'>Express</div>
            <div className='chip'>ReactNative</div>
            <div className='chip'>MySQL</div>
            <div className='chip'>MongoDB</div>
            <div className='chip'>AWS S3</div>
            <div className='chip'>AWS Route53</div>
            <div className='chip'>AWS Cloudfront</div>
            <div className='chip'>AWS Lambda</div>
            <div className='chip'>AWS EC2</div>
            <div className='chip'>ServerLess</div>
          </div>
        </div>
      </Column>
    </section>
  );
};
