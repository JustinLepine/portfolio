import Images from '../../assets/project-images/index';

const ProjectLists = [
    {
        id: '01',
        title: 'Ask V',
        tech: 'HTML, Sass, JS',
        desc: 'From the first Bootcamp Hackathon Ask V is a Valentines Day bot that would answer simple questions using OpenAI API',
        github: 'https://github.com/JustinLepine/bstn-mini-hackathon',
        image: Images.askv 
    },
    {
        id: '02',
        title: 'BrainFlix',
        tech: 'React, Sass, JS, NodeJS',
        desc: 'First project using React and Node by making a basic Youtube clone to showcase front and backend skills',
        github: 'https://github.com/JustinLepine/justin-lepine-brainflix',
        image: Images.brainflix 
    },
    {
        id: '03',
        title: 'Shopify',
        tech: 'React, Sass, JS',
        desc: 'Shopify came to BrainStation and presented a problem to solve in a 24H Hackathon',
        github: 'https://github.com/JustinLepine/brainstation-shopify-hackathon',
        image: Images.shopify
    },
    {
        id: '04',
        title: 'Can of Worms',
        tech: 'React, Sass, JS, NodeJS, MySQL',
        desc: 'Capstone project for BrainStation. I chose a fishing app to help better manage fishing equipment inventory',
        github: 'https://github.com/JustinLepine/capstone-can-of-worms',
        image: Images.canofworms
    }
]

export default ProjectLists;