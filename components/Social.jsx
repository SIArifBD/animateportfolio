import Link from "next/link";

import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/SIArifBD",
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/aisaifulbd/",
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/siarif/",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/",
    },
]

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((social, index) => {
                    return (
                        <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
                    );
                })
            }
        </div>
    )
}

export default Social;