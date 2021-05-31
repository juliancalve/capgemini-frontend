import React, { useEffect, useState } from 'react'
import LoggedLayout from '../../components/Layout/LoggedLayout/LoggedLayout';
import Table from '../../components/Shared/Table/Table';
import { getAllClients } from '../../services/client.service';
import { useHistory } from 'react-router-dom';
import Paths from '../../constants/Paths';

const dataHeaders = [
    'name',
    'email',
    'role',
    'options'
];

const Clients = () => {

    const [ clients, setClients ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ currentPage, setCurrentPage ] = useState(1);
    const history = useHistory();

    const callGetAllClients = async ( page: number = 1 ) => {

        const response = await getAllClients( page );
        if( response.data ) {
            setClients( response.data.data.data );
            setTotalPages( response.data.data.totalPages );
            setCurrentPage( response.data.data.page );
        }
    };

    useEffect(() => {
        callGetAllClients();
    }, []);

    return (
        <LoggedLayout>
            <Table
                dataRows={ clients.map( (client: any) => {
                    return {
                        name: client.name,
                        email: client.email,
                        role: client.role,
                        option: () => {
                            history.push( Paths.clientPolicies.replace(':email', client.email ) );
                        }
                    }
                }) }
                dataHeader={ dataHeaders }
                currentPage={ currentPage }
                totalPages={ totalPages }
                onChangePage={ ( page: number ) => callGetAllClients( page ) }
            />
        </LoggedLayout>
    );
};

export default Clients;
