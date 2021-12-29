/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Cut. Color. Enhance.',
    title: 'Cut. Color. Enhance.',
    text:
      'We’re the salon that can do it all. Cut, color, dip, dry, and care.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Cutting edge hair design',
    title: 'Cutting edge hair design',
    text:
      'Cutting edge cuts, the latest styles, and professional expertise.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'We make it shine',
    title: 'We make it shine',
    text:
      'We use the best products to leave your hair shiny and healthy.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Beautiful hair begins here',
    title: 'Beautiful hair begins here',
    text:
      'We are what you’d call the ultimate makeover.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Beautiful hair is healthy hair."
          title="Say goodbye to bad hair days!"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
