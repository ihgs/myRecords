import { getData } from '../libs/indexedDb'
import Footer from '../components/Footer'
import { useLoaderData } from 'react-router-dom'
import { Step } from '../libs/db'
import StepForm from '../components/StepForm'


export const dataLoader = async ({params}: {params: any}) => {
    return await getData('steps',parseInt(params.id))
}

export default function EditRecord() {
    const data = useLoaderData() as Step;
    
    return (
        <>
            <StepForm current={data} />
            <Footer />
        </>
    )

}