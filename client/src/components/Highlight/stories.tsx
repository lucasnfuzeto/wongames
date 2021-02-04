import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead It`s Back',
    subtitle: 'Come see john`s new adventures',
    buttonLabel: 'Buy Now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
