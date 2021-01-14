import Hero from "./components/Hero.js"
import { Container, Box, Typography, makeStyles } from '@material-ui/core'
export default function Company(){
    let style = {

    };
    return(
        <div style ={style}>
            <Hero/>
            <div>
            <Typography variant ="h1">What is FoxFiles?</Typography>
            <Typography variant= "p"> FoxFiles is an innovative solution to long-term file hosting.
          As we continue to transition into a digital era, our namesakes and keepsakes
          transform into digital ones. Current cloud solutions like Dropbox, Google Drive,
          and Microsoft Onedrive are all great solutions in the short-term. But think 20 years down the line,
          30? 40? Will your files still be there? Are your files truly private? In the world of the invisible hand where products phase in and out,
          those products may not be within those company's purview down the line.</Typography>
            </div>
            <div>
                <Typography variant ="h1">What makes us unique?</Typography>
                <Typography variant ="p"> FoxFiles is the solution to that problem. We are not a file server hosting company but instead a software company
          developing file server software and providing you with the tools and support to manage and maintain your data. This gives you
          the added benefit of having the confidence that no one else can see your files but you. Because we don't host your files, you do.
          By becoming a member with us, you'll gain access to our software, along with dedicated support staff
          and installation technicians to get you started.</Typography>
            </div>
            <div>
                <Typography variant = "h1">We offer</Typography>
                <Typography variant ="p">We offer a safe way to store your files where the user is in full control of their privacy. 
                With a free seven day triel the use is able to experience first hand of FoxFiles' benifical private store and with automatic renewal 
                the user can pay only 9.99$ a month to continue using the storage. The renewal could be turned off at anytime.</Typography>
            </div>
        </div>
    );
};