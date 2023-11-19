import Footer from '../components/Footer'
import StepForm from '../components/StepForm'
import { DisplayVersion } from '../components/Version'

export default function NewRecord() {
    
    return (
        <>
            <DisplayVersion />
            <StepForm  />
            <Footer mode="step"/>
        </>
    )


}