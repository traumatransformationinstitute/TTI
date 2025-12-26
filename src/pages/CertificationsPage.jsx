import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import logo from '../assets/logo.png';
import './CertificationsPage.css';

const CertificationsPage = () => {
    const certifications = [
        {
            title: "Certified Trauma Support Specialist (CTSS)",
            description: "Certified Trauma Support Specialist is a certification that attests that the bearer has completed the educational requirements necessary to help non-clinical care professionals learn the essential information and skills to help trauma survivors recover fully. This certification is valuable for non-clinical trauma professionals, mental health staff, nurses, emergency first responders, ...read more",
            link: "/certification-details"
        },
        {
            title: "Certified Clinical Trauma Specialist – Individual (CCTSI)",
            description: "Acquiring this certification means that you have learned the essential components for safety and effectively treating traumatic stress with individual adults. While the certification focuses upon acquiring the knowledge and skills for treating PTSD, those becoming certified with the CCTSI designation will be able to utilize the information and skills to effectively treat all anxiety disorders ...read more"
        },
        {
            title: "Certified Clinical Trauma Specialist – Family (CCTSF)",
            description: "The Certified Trauma Specialist - Family (CCTSF) certification is designed using evidenced-based leading edge interventions and protocols that clinicians can immediately implement to augment their work treating survivors of trauma within a family context. The Certified Clinical Trauma Specialist - Family (CCTSF) certification demonstrates knowledge of the dynamic elements of trauma treatment...read more"
        },
        {
            title: "Advanced Certified Clinical Trauma Specialist ACCTS",
            description: "This Certification is intended for the professional who has an existing knowledge about trauma and an overview of trauma treatment modalities (CCTSI Certified Clinical Trauma Specialist for Individuals or the CCTSF Certified Clinical Trauma Specialist for Family) or its equivalent. The Advanced certification builds from that foundation and adds skills and tools designed to promote trauma healing...read more"
        },
        {
            title: "Certified Clinical Trauma Specialist-A (CCTSA) Trauma and Addiction",
            description: "Those that obtain the Certified Clinical Trauma Specialist-Addiction (CCTSA) Certification possess the educational information to understand how trauma can effect treatment presentation, engagement, and the outcome of behavioral health services. CCTSA Certification demonstrates knowledge and competency related to topics including...read more"
        },
        {
            title: "Advanced Certified Clinical Trauma Specialist – Trauma and Addiction (ACCTS-A)",
            description: "The Advanced Certified Clinical Trauma Specialist in Addiction (ACCTS-A) certification is designed for professionals who already possess foundational knowledge in trauma and addiction as well as understanding the Salutogenic approach to trauma and addiction treatment modalities. This advanced certification enhances...read more"
        },
        {
            title: "Certified Resilience Professional (CRP)",
            description: "This certification attests that the bearer has completed the educational requirements necessary to actively build resilience and well-being in their own lives and also an introduction to the skills needed to help others accomplish the same. This certification emphasizes a Salutogenic approach to managing burnout, traumatic stress, and compassion fatigue...read more"
        },
        {
            title: "Certified Clinical Trauma Specialist-Prenatal (CCTS-P)",
            description: "The Certified Clinical Trauma Specialist-Prenatal (CCTS-P) certification is designed using evidenced-based leading edge interventions and protocols that clinicians can immediately implement to augment their work treating trauma especially within a family context. It represents knowledge of how trauma, toxic stress and teratogens impact a mother's body and nervous system before and during pregnancy...read more"
        },
        {
            title: "Certified Functional Medicine And Trauma Specialist (CFMTS)",
            description: "This Certification is intended for the professional who needs a knowledge base about trauma and the potential medical complications of trauma, toxic stress and repeated adversity. It examines what medical stabilization would be needed to help the trauma client resolve trauma and the physiological medical complications...read more"
        }
    ];

    return (
        <div className="certifications-page">
            <Header />
            <main className="cert-content">
                <div className="container">
                    <div className="cert-list">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-item">
                                <div className="cert-icon">
                                    <img src={logo} alt="TII Icon" />
                                </div>
                                <div className="cert-details">
                                    <Link to="/certification-details" className="cert-title-link">
                                        <h3>{cert.title}</h3>
                                    </Link>
                                    <p>{cert.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer Removed - using Global Footer */}
        </div>
    );
};

export default CertificationsPage;
