/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'You are worth it',
    title: 'You are worth it',
    text:
      'Good service and reasonable prices, guaranteed! Look good, feel great!',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Your hair, our passion',
    title: 'Your hair, our passion',
    text:
      'We are passionate about making you look your best.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'We can handle all your hair needs',
    title: 'We can handle all your hair needs',
    text:
      'We will make your hair so glamorous that people will turn their heads.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'The hair salon that cares',
    title: 'The hair salon that cares',
    text:
      'Finally, a hair salon that understands you.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="All about you!"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
