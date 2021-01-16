import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default  {
    name: ' Moe Farid',
    title: ' Full Stack Developer',

    email: ' moe.faridd@gmail.com',
    job: 'Freelancer',
    address: '123 test street',
    phone: '111111111',
    socials: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: 'MoeisCoding',
            icon: <FacebookIcon/>,
        },
            Twitter: {
                link: 'https://www.facebook.com',
                text: 'mytwitter',
                icon: <TwitterIcon/>
            },
            Linkedin: {
                    link: 'https://www.facebook.com',
                    text: 'mylinkedin',
                    icon: <LinkedInIcon/>
                },
            Github: {
                    link: 'https://www.facebook.com',
                    text: 'mygithub',
                    icon: <GitHubIcon/>
                },
    }
}