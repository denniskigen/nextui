import React from 'react';
import { Meta } from '@storybook/react';
import Table, { TableProps } from './index';
import { getKeyValue } from '../utils/object';

// import { User, Text, Col, Row, Tooltip, styled } from '../index';
// import { Eye, Edit, Delete } from '../utils/icons';

export default {
  title: 'Display/Table',
  component: Table,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100%' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

// const StyledBadge = styled('span', {
//   display: 'inline-block',
//   textTransform: 'uppercase',
//   padding: '$2 $3',
//   margin: '0 2px',
//   fontSize: '10px',
//   fontWeight: '$bold',
//   borderRadius: '14px',
//   letterSpacing: '0.6px',
//   lineHeight: 1,
//   boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
//   alignItems: 'center',
//   alignSelf: 'center',
//   color: '$white',
//   variants: {
//     type: {
//       active: {
//         bg: '$green100',
//         color: '$green600'
//       },
//       paused: {
//         bg: '$red100',
//         color: '$red600'
//       },
//       vacation: {
//         bg: '$yellow100',
//         color: '$yellow600'
//       }
//     }
//   },
//   defaultVariants: {
//     type: 'active'
//   }
// });

// const IconButton = styled('button', {
//   dflex: 'center',
//   border: 'none',
//   outline: 'none',
//   cursor: 'pointer',
//   padding: '0',
//   margin: '0',
//   bg: 'transparent',
//   transition: '$default',
//   '&:hover': {
//     opacity: '0.8'
//   },
//   '&:active': {
//     opacity: '0.6'
//   }
// });

// type UserType = {
//   id: string | number;
//   name?: string;
//   email?: string;
//   role?: string;
//   team?: string;
//   status: 'active' | 'paused' | 'vacation';
//   meta?: { [key: string]: any };
// };

// const rows: UserType[] = [
//   {
//     id: 1,
//     name: 'Tony Reichert',
//     role: 'CEO',
//     team: 'Management',
//     status: 'active',
//     meta: {
//       age: '29',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
//       email: 'tony.reichert@example.com'
//     }
//   },
//   {
//     id: 2,
//     name: 'Zoey Lang',
//     role: 'Technical Lead',
//     team: 'Development',
//     status: 'paused',
//     meta: {
//       age: '25',
//       avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
//       email: 'zoey.lang@example.com'
//     }
//   },
//   {
//     id: 3,
//     name: 'Jane Fisher',
//     role: 'Senior Developer',
//     team: 'Development',
//     status: 'active',
//     meta: {
//       age: '22',
//       avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
//       email: 'jane.fisher@example.com'
//     }
//   },
//   {
//     id: 4,
//     name: 'William Howard',
//     role: 'Community Manager',
//     team: 'Marketing',
//     status: 'vacation',
//     meta: {
//       age: '28',
//       avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
//       email: 'william.howard@example.com'
//     }
//   },
//   {
//     id: 5,
//     name: 'Kristen Copper',
//     role: 'Sales Manager',
//     team: 'Sales',
//     status: 'active',
//     meta: {
//       age: '24',
//       avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
//       email: 'kristen.cooper@example.com'
//     }
//   }
// ];

const rows = [
  { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
  { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
  { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
  { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' }
];

// duplicate rows
const paginatedRows = [
  ...rows,
  {
    id: 5,
    name: 'Games',
    date: '6/7/2020',
    type: 'File folder'
  },
  {
    id: 6,
    name: 'Program Files',
    date: '4/7/2021',
    type: 'File folder'
  },
  {
    id: 7,
    name: 'bootmgr',
    date: '11/20/2010',
    type: 'System file'
  },
  {
    id: 8,
    name: 'Games',
    date: '6/7/2020',
    type: 'File folder'
  },
  {
    id: 9,
    name: 'Program Files',
    date: '4/7/2021',
    type: 'File folder'
  },
  {
    id: 10,
    name: 'bootmgr',
    date: '11/20/2010',
    type: 'System file'
  },
  {
    id: 11,
    name: 'bootmgr',
    date: '11/20/2010',
    type: 'System file'
  },
  {
    id: 12,
    name: 'Games',
    date: '6/7/2020',
    type: 'File folder'
  }
];

const columns = [
  { name: 'Name', uid: 'name' },
  { name: 'Type', uid: 'type' },
  { name: 'Date Modified', uid: 'date' }
];

// const columns2: TableColumnItem[] = [
//   {
//     field: 'name',
//     label: 'Name',
//     width: 260,
//     renderHeader: (data?: TableColumnHeaderData) => {
//       console.log('renderHeader', data);
//       return <b>Name</b>;
//     },
//     renderCell: (data: TableCellData<UserType>) => {
//       return (
//         <User
//           squared
//           src={data.rowData?.meta?.avatar}
//           name={data.rowData?.name}
//           css={{ p: 0 }}
//         >
//           {data.rowData?.meta?.email}
//         </User>
//       );
//     }
//   },
//   {
//     field: 'role',
//     label: 'Role',
//     width: 180,
//     renderCell: (data: TableCellData<UserType>) => {
//       return (
//         <Col>
//           <Row>
//             <Text b size={14} css={{ tt: 'capitalize' }}>
//               {data.value}
//             </Text>
//           </Row>
//           <Row>
//             <Text b size={13} css={{ tt: 'capitalize', color: '$accents3' }}>
//               {data.rowData?.team}
//             </Text>
//           </Row>
//         </Col>
//       );
//     }
//   },
//   {
//     field: 'status',
//     label: 'Status',
//     width: 140,
//     renderCell: (data: TableCellData<UserType>) => {
//       return (
//         <StyledBadge type={data.rowData?.status}>{data.value}</StyledBadge>
//       );
//     }
//   },
//   {
//     field: 'action',
//     label: 'Actions',
//     width: 140,
//     renderCell: (data: TableCellData<UserType>) => {
//       return (
//         <Row justify="center" align="center">
//           <Col css={{ d: 'flex' }}>
//             <Tooltip content="Details">
//               <IconButton
//                 onClick={() => console.log(`View user ${data.rowData?.id}`)}
//               >
//                 <Eye size={20} fill="#979797" />
//               </IconButton>
//             </Tooltip>
//           </Col>
//           <Col css={{ d: 'flex' }}>
//             <Tooltip content="Edit user">
//               <IconButton
//                 onClick={() => console.log(`edit user ${data.rowData?.id}`)}
//               >
//                 <Edit size={20} fill="#979797" />
//               </IconButton>
//             </Tooltip>
//           </Col>
//           <Col css={{ d: 'flex' }}>
//             <Tooltip
//               content="Delete user"
//               color="error"
//               onClick={() => console.log(`Delete user ${data.rowData?.id}`)}
//             >
//               <IconButton>
//                 <Delete size={20} fill="#FF0080" />
//               </IconButton>
//             </Tooltip>
//           </Col>
//         </Row>
//       );
//     }
//   }
// ];

const BaseTable = (props: Omit<TableProps, 'children'>) => {
  return (
    <Table
      aria-label="Example static collection table"
      css={{ height: 'auto', minWidth: '620px' }}
      {...props}
    >
      <Table.Header>
        <Table.Column>NAME</Table.Column>
        <Table.Column>TYPE</Table.Column>
        <Table.Column>DATE MODIFIED</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export const Static = () => {
  return <BaseTable />;
};

export const Dynamic = () => {
  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{ height: 'auto', minWidth: '620px' }}
      selectionMode="multiple"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            align={column.uid === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{getKeyValue(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const Sticked = () => {
  return <BaseTable sticked selectionMode="multiple" />;
};

export const SingleSelection = () => {
  return <BaseTable selectionMode="single" />;
};

export const MultipleSelection = () => {
  return <BaseTable selectionMode="multiple" selectedColor="secondary" />;
};

export const Striped = () => {
  return <BaseTable selectionMode="multiple" striped />;
};

export const Compact = () => {
  return <BaseTable selectionMode="multiple" compact />;
};

export const NoShadow = () => {
  return (
    <BaseTable
      sticked
      shadow={false}
      selectionMode="multiple"
      selectedColor="secondary"
    />
  );
};

export const Lined = () => {
  return (
    <BaseTable
      lined
      headerLined
      shadow={false}
      selectionMode="multiple"
      selectedColor="secondary"
    />
  );
};

export const Bordered = () => {
  return (
    <BaseTable
      bordered
      sticked
      shadow={false}
      selectionMode="multiple"
      selectedColor="secondary"
    />
  );
};

export const DisabledKeys = () => {
  return (
    <BaseTable
      shadow={false}
      disabledKeys={[2]}
      selectionMode="multiple"
      selectedColor="secondary"
    />
  );
};

export const Pagination = () => {
  return (
    <Table
      bordered
      shadow={false}
      aria-label="Example table with dynamic content"
      css={{ minWidth: '620px', height: 'auto' }}
      selectionMode="multiple"
      selectedColor="secondary"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            align={column.uid === 'date' ? 'end' : 'start'}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={paginatedRows}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{getKeyValue(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={3}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
  );
};

export const NoAnimated = () => {
  return (
    <BaseTable
      animated={false}
      selectionMode="multiple"
      selectedColor="secondary"
    />
  );
};