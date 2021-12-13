import React,{Component} from 'react'
import '../App.css'
import Logo from '../pics/cezslogo.png'


class PrivacyPage extends Component{
    render(){
        return(
            <div className="privacycontainer">
                <div className='logobox'>
                    <div style={{marginTop: 20}}>
                        <img src={Logo} className='logo' alt='logo'/>

                    </div>
                </div>
                <div className="logobox">
                    <div className='privacybox'>
                        <h1 style={{color: 'white', textAlign: 'center'}}>Privacy Policy</h1>
                        <p className="privacywritings">Last updated December 1, 2021</p>
                        <p className="privacywritings">Thank you for choosing to be part of our community at Cezs (“we”, “us”, or “our”). Cezs is a free app and is intended for use as is. 
                            We are committed to protecting your personal information and your right to privacy. 
                            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of personal information. 
                            If you choose to use Cezs, then you agree to the collection and use of information in relation to this policy. 
                            The personal information that we collect is used for providing and improving our platform. 
                            Your information will not be used or shared with anyone except as described in this privacy policy. 
                        </p>
                        <h2 className="privacytitle">Information Collection and Use</h2>
                        <p className="privacywritings">For a better experience, we collect personal information that you voluntarily provide to us when you register on Cezs, which includes first name, last name, email address, username and password.
                            We also collect information regarding your geolocation to allow you to pinpoint and see events around you, mobile device access to use your camera roll or camera to post, and push notifications to get notified when people interact with you or there’s an upcoming event near you when you use our app. 
                            The information we collect will be retained by us and used as described in this privacy policy.
                        </p>
                        <h2 className="privacytitle">Information Safety</h2>
                        <p className="privacywritings">We have implemented appropriate technical security measures designed to protect the security of any personal information we process. 
                            However, remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                        </p>
                        <h2 className="privacytitle">Cookies</h2>
                        <p className="privacywritings">Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. 
                            These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                            This Service does not use these “cookies” explicitly. 
                            However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. 
                            You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. 
                            If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                        </p>
                        <h2 className="privacytitle">Minors Privacy</h2>
                        <p className="privacywritings">We do not address anyone under the age of 18. 
                            We do not knowingly collect personally identifiable information from individuals under 18. 
                            In the case that we discover that an individual under 18 has provided us with personal information, we will delete this from our servers. 
                            If you are a parent or guardian and you are aware that your child has provided us with personal information please contact us so we can take necessary precautions.
                        </p>
                        <h2 className="privacytitle">Updating User Information</h2>
                        <p className="privacywritings">If you would at any time like to review or change the information in your account, log in to your account settings and update your user account.
                            If you request to terminate your account, we will deactivate or delete your account and information from our databases. 
                            However we may retain some information in our files to prevent fraud, troubleshoot problems, and assist with any investigations.
                        </p>
                        <h2 className="privacytitle">Changes to This Privacy Policy</h2>
                        <p className="privacywritings">We may update our Privacy Policy from time to time. 
                            Thus, you are advised to review this page periodically for any changes. 
                            We will notify you of any changes by posting the new Privacy Policy on this page. 
                            These changes are effective immediately after they are posted on this page.
                        </p>
                        <h2 className="privacytitle">Contact Us</h2>
                        <p className="privacywritings">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@cezsmusic.com.</p>
                    </div>
                </div>
                

      
            </div>
        )
    }
}

export default PrivacyPage