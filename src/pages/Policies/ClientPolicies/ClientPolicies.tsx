import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router';
import LoggedLayout from '../../../components/Layout/LoggedLayout/LoggedLayout';
import Table from '../../../components/Shared/Table/Table';
import { getPoliciesByEmail } from '../../../services/policy.service';
import { formatDate } from '../../../utils/DateUtils';
import backImg from '../../../assets/images/back.png';

const dataHeader = [
    'amount insured',
    'email',
    'inception date',
    'installment payment'
];

const UserPolicies = () => {

    const [ policies, setPolicies ] = useState([]) as any;
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);
    const { email }: any = useParams();
    const history = useHistory();

    const callGetPoliciesByEmail = async ( page: number ) => {
        console.log( email )
        const response = await getPoliciesByEmail( page, email );
        if( response.data ){
            setPolicies( response.data.data.data );
            setCurrentPage( response.data.data.page );
            setTotalPages( response.data.data.totalPages );
        }
    }

    useEffect(() => {
        callGetPoliciesByEmail(1);
    }, []);

    return (
        <LoggedLayout>
            <div>
                <img alt='back' className='clickeable' src={ backImg } onClick={ () => { history.goBack() }}  width='30'/>
            </div>
            <Table
                dataHeader={ dataHeader }
                dataRows={ policies.map( (policy: any) => {
                return {
                    amountInsured: `$${policy.amountInsured}`,
                    email: policy.email,
                    inceptionDate: formatDate(policy.inceptionDate),
                    installmentPayment: policy.installmentPayment
                }
            })}
            currentPage={ currentPage }
            totalPages={ totalPages }
            onChangePage={ ( page: number ) => callGetPoliciesByEmail( page ) }
            />
        </LoggedLayout>
    )
};

export default UserPolicies;
