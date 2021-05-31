import React, { useEffect, useState } from 'react'
import LoggedLayout from '../../components/Layout/LoggedLayout/LoggedLayout';
import Table from '../../components/Shared/Table/Table';
import { getPolicies } from '../../services/policy.service';
import { formatDate } from '../../utils/DateUtils';

const dataHeader = [
    'amount insured',
    'email',
    'inception date',
    'installment payment'
];

const Policies: React.FunctionComponent = () => {

    const [ policies, setPolicies ] = useState([]) as any;
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);

    const callGetPolicies = async ( page: number ) => {
        const response = await getPolicies( page );
        if( response.data ){
            setPolicies( response.data.data.data );
            setCurrentPage( response.data.data.page );
            setTotalPages( response.data.data.totalPages );
        }
    }

    useEffect(() => {
        callGetPolicies(1);
    }, []);

    return (
        <LoggedLayout>
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
            onChangePage={ ( page: number ) => callGetPolicies( page ) }
            />
        </LoggedLayout>
    )

};

export default Policies;
