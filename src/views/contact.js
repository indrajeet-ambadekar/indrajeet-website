import { Text, Column, Link } from "lumina-design";
import { LuminaIcon } from "lumina-design-icons";
export default ({ ...props }) => {
  return (
    <section className='info-section intro-section'>
      <Column md={7} xs={12}>
        <div className='intro-text-section'>
          <Text type='h4'>Connect with me</Text>
          <Text type='h2' className='bold'>
            Indrajeet <em className='colored'>Ambadekar</em>
          </Text>
          <Text type='b2' className='medium-text'></Text>
          <div className='chip-cntnr'>
            <div className='chip'>
              <Link href='https://www.linkedin.com/in/indrajeetambadekar1993/'>
                <LuminaIcon name='linkedin-square' size={40}></LuminaIcon>
              </Link>
            </div>
            <div className='chip'>
              <Link href='https://www.facebook.com/samrattheawesome'>
                <LuminaIcon name='facebook-sqaure' size={40}></LuminaIcon>
              </Link>
            </div>
            <div className='chip'>
              <Link href='https://github.com/indrajeet-ambadekar'>
                <LuminaIcon name='github' size={40}></LuminaIcon>
              </Link>
            </div>
            <div className='chip'>
              <Link href='https://www.instagram.com/indrajeet.ambadekar/'>
                <LuminaIcon name='instagram' size={40}></LuminaIcon>
              </Link>
            </div>
            <div className='chip'>
              <Link href='mailto:iambadekar@gmail.com'>
                <LuminaIcon name='mail' size={40}></LuminaIcon>
              </Link>
            </div>
            <div className='chip'>
              <Link href='whatsapp://send?abid=+917021713347&text=Hi there! I just went through you website and wanted to connect with you'>
                <LuminaIcon name='whatsapp' size={40}></LuminaIcon>
              </Link>
            </div>
          </div>

          <Text type='caption' className='contact-row'>
            <Link href='tel:+917021713357'>
              <LuminaIcon name='phone' size={13} /> +91 7021713357
            </Link>
          </Text>

          <Text type='caption' className='contact-row'>
            <Link href='tel:+917506007163'>
              <LuminaIcon name='phone' size={13} /> +91 7506007163
            </Link>
          </Text>
          <Text type='caption' className='contact-row'>
            <Link href='mailto:iambadekar@gmail.com'>
              <LuminaIcon name='mail' size={13} /> iambadekar@gmail.com
            </Link>
          </Text>
        </div>
      </Column>
      <Column md={5} xs={12}>
        <div className='intro-big-img photo-3'></div>
      </Column>
    </section>
  );
};
