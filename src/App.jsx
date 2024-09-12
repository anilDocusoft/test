
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TestApi from './apis/test.api';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, FormControl, FormLabel, Input, Typography, InputLabel, Button } from '@mui/material';
import DataTable from './components/table';
import { formatDate1 } from './utils/common.util';
import toast from 'react-hot-toast';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const BasicSelect = () => {
  const [projectId, setProjectId] = useState('171');
  const [categoryId, setCategoryId] = useState('0');
  const [descriptionId, setDescriptionId] = useState('0');
  const [folderName, setFolderName] = useState('171');
  const [SectionId, setSectionId] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [udfId2, setUdfId2] = useState('');
  const [udfId, setUdfId] = useState('');
  const [subSectionId, setSubSectionId] = useState('');
  const [folderData, setFoldersData] = useState({ Table: [] });
  const [foldersData1, setFoldersData1] = useState({ Table: [] });
  const [sectionData, setSectionData] = useState({ Table: [] });
  const [clientByFolder, setClientByFolder] = useState({ Table1: [] });
  const [categoryData, setCategoryData] = useState([]);
  const [subSectionData, setSubSectionData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userList1, setUserList1] = useState([]);
  const [userList2, setUserList2] = useState([]);
  const [userList3, setUserList3] = useState([]);
  const [financialYear, setFinancialYear] = useState([]);
  const [udfTable, setUdfTable] = useState([]);
  const [udfTable1, setUdfTable1] = useState([]);
  const [udfTable2, setUdfTable2] = useState([]);
  const [udfTable3, setUdfTable3] = useState([]);
  const [udfTable4, setUdfTable4] = useState([]);
  const [commets, setCommets] = useState([]);
  const [documentDate, setDocumentDate] = useState(dayjs('2024-04-17'));
  const [receivedDate, setReceivedDate] = useState(dayjs('2024-04-17'));
  const [actionByDate, setActionByDate] = useState(dayjs('2024-07-17'));
  const [file2, setFile2] = useState(null);
  const [filename2, setFilename2] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [descriptions, setDescriptions] = useState()
  const [descriptions2, setDescriptions2] = useState()
  const [comments, setComments] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientID, setClientID] = useState('')
  const [client, setClient] = useState('')
  const [fromEmail, setFromEmail] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [ccEmail, setCcEmail] = useState('');
  const [selectedRow, setSelectedRow] = useState(false);


  const testApi = new TestApi();

  // Function to fetch folders from the API
  const Json_GetFolderData = async () => {
    try {
      const response = await testApi.Json_GetFolderData({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId: '171',
        SectionId: '-1',
        ClientId: ''
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        setFoldersData1(data);
      }
    } catch (error) {
      console.error('Error fetching folders:', error);
    }
  };
  const getFolders = async () => {
    try {
      const response = await testApi.Json_GetFolders({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId: '171',
        SectionId: '-1',
        ClientId: ''
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        setFoldersData(data);
      }
    } catch (error) {
      console.error('Error fetching folders:', error);
    }
  };
  const getSections = async (ProjectId) => {
    try {
      const response = await testApi.Json_GetSections({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        setSectionData(data);

      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const getUDF = async (ProjectId) => {
    try {
      const response = await testApi.Json_GetUDF({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        if (data.Table) {
          setUdfTable(data?.Table || [])
        }
        if (data.Table1) {
          setUdfTable1(data?.Table1 || []);
        }
        if (data.Table2) {
          setUdfTable2(data?.Table2 || []);
        }
        if (data.Table3) {
          setUdfTable3(data?.Table3 || [])
        }
        if (data.Table4) {
          setUdfTable4(data?.Table4 || [])
        }
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const getClientByFolder = async (ProjectId) => {
    try {
      const response = await testApi.Json_GetClientsByFolder({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        setClientByFolder(data);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const Json_GetUserComments = async (ProjectId, SectionId) => {
    try {
      const response = await testApi.Json_GetUserComments({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId,
        SectionId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        setCommets(data.Table);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const Json_GetSubSections = async (ProjectId, SectionId) => {
    try {
      const response = await testApi.Json_GetSubSections({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId,
        SectionId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        if (data.Table) {
          setSubSectionData(data?.Table || []);
        } else {
          setSubSectionData(data?.Table1 || [])
        }


      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const Json_GetForwardUserList = async (ProjectId, SectionId) => {
    try {
      const response = await testApi.Json_GetForwardUserList({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId,
        SectionId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        console.log(data);

        if (data.Table) {
          setUserList(data?.Table || [])
        }
        if (data.Table1) {
          setUserList1(data?.Table1 || []);
        }
        if (data.Table2) {
          setUserList2(data?.Table2 || []);
        }
        if (data.Table3) {
          setUserList3(data?.Table3 || [])
        }

      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const Json_GetCategory = async (ProjectId, SectionId) => {
    try {
      const response = await testApi.Json_GetCategory({
        Email: 'patrick@docusoft.net',
        agrno: '0003',
        password: 'UGF0cmljazEyMy4=',
        ProjectId,
        SectionId
      });

      if (response?.status === 200) {
        const data = JSON.parse(response.data.d);
        if (data.Table1) {
          setCategoryData(data?.Table1 || []);
        } else if (data.Table2) {
          setCategoryData(data?.Table2 || []);
        }
        else {
          setCategoryData(data?.Table || [])
        }
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const Json_RegisterItem = async (e) => {
    e.preventDefault();
    try {
      const response = await testApi.Json_RegisterItem({
        Email: clientEmail,
        password: 'UGF0cmljazEyMy4=',
        agrno: "0003",
        EmailMessageId: "",
        actionByDate: "",
        actionDate: "",
        // categoryId: Number(categoryId),
        categoryId: '',
        clientname: client,
        deptId: 0,
        deptName: "",
        description: descriptions,
        docDirection: "",
        docViewedDate: formatDate1(documentDate),
        extDescription: "",
        fileName: "hello.emdl",
        folderId: Number(projectId),
        folderName: folderName,
        forActionList: "",
        forGroupList: "",
        forInformationList: "",
        originatorId: "WIL-24",
        priority: "",
        receiveDate: formatDate1(receivedDate),
        retForMonth: -1,
        sUDFList: "",
        sectionId: Number(SectionId),
        sectionName: sectionName,
        senderId: "",
        stickyNote: "",
        strb64: fileBase64,
        strtxt64: "",
        subSectionId: Number(subSectionId),
        uDFList: ""
      });

      if (response?.status === 200) {
        toast.success('Registered successfully')
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const handleFolderChange = (e) => {
    const selectedFolder = folderData.Table.find(folder => folder.FolderID === e.target.value);
    if (selectedFolder) {
      const { FolderID, Folder } = selectedFolder;
      setProjectId(FolderID);
      setFolderName(Folder);
      getSections(FolderID);
      getUDF(FolderID);
      getClientByFolder(FolderID);
    }
  };

  const handleClientChange = (e) => {
    const selectedFolder = clientByFolder.Table1.find(folder => folder.ClientID === e.target.value);
    if (selectedFolder) {
      const { Client, ClientID, Email } = selectedFolder;
      setClient(Client);
      setClientID(ClientID)
      setClientEmail(Email);
    }
  };

  const handleSectionChange = (e) => {
    const selectedFolder = sectionData.Table.find(section => section.SecID === e.target.value);
    if (selectedFolder) {
      const { SecID, Sec } = selectedFolder;
      setSectionId(SecID);
      setSectionName(Sec);
      Json_GetUserComments(projectId, SecID)
      Json_GetSubSections(projectId, SecID)
      Json_GetForwardUserList(projectId, SecID)
      Json_GetCategory(projectId, SecID)
    }

  };
  const handleFileChange3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilename2(file.name);
      setFile2(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert the file content to Base64 and update state
        const base64String = reader.result.split(',')[1]; // Skip the data URL prefix
        setFileBase64(base64String);
      };
      reader.readAsDataURL(file); // Read file as Data URL (Base64)
    }
  };
  const handleRemoveFile = () => {
    setFilename2('');
    setFile2(null);
    setFileBase64('');
    document.getElementById('file-input').value = ''; // Clear the file input
  };

  useEffect(() => {
    getFolders();
    getSections('171')
    getUDF('171')
    Json_GetFolderData()
  }, []);


  return (
    <Box
      // border="1px solid #cccccc"
      width="98vw"
      // height="100vh"
      margin="auto"
      display="flex"

      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <FormControl style={{ width: "98%" }} margin="normal">
        <Box borderRadius={'10px'}
          padding={2} onClick={() => document.getElementById('file-input').click()} margin={'simple'} style={{ borderStyle: "dashed" }} border={'1px solid black'} p={'2'}>
          <Box
            height={'100px'}
            borderRadius={'10px'}
            display={'flex'}
            textAlign={'center'}
            bgcolor={filename2 ? "gray" : "#cccccc"}
            justifyContent={'center'}
            alignItems={'center'}
          > {filename2 || ' Drag or Drop Your file and Click to Uplaod'} </Box>
          <Input
            type="file"
            id='file-input'
            onChange={handleFileChange3}
            accept="*"
            sx={{ display: 'none' }}
          />
        </Box>
      </FormControl>
      <Box flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} width={'90%'} justifyContent={'space-between'} display={'flex'}>

        <Box minWidth={{ sm: "fit-content", md: "370px" }} width={{ sm: '100%', md: '30%' }} padding="16px">
          <FormControl fullWidth margin="normal">
            <InputLabel id="folder-select-label">Select Folder</InputLabel>
            <Select
              labelId="folder-select-label"
              id="folder-select"
              value={projectId || ''}
              label="Select Folder"
              onChange={
                handleFolderChange
              }
            >
              {folderData.Table.map((option, index) => (
                <MenuItem key={index} value={option.FolderID}>
                  {option.Folder}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="section-select-label">Select Section</InputLabel>
            <Select
              labelId="section-select-label"
              id="section-select"
              value={SectionId || ''}
              label="Select Section"
              onChange={(e) => handleSectionChange(e)}
            >
              {udfTable.map((option, index) => {
                return (
                  <MenuItem key={index} value={option.SecID}>
                    {option.Sec}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="client-select-label">Select Reference</InputLabel>
            <Select
              labelId="client-select-label"
              id="section-UDF"
              value={clientID || ''}
              label="Select Section"
              onChange={handleClientChange}
            >
              {clientByFolder?.Table1?.map((option, index) => {
                return (
                  <MenuItem key={index} value={option.ClientID}>
                    {option.Client}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          {
            subSectionData.length > 0 ? (
              <FormControl fullWidth margin="normal">
                <InputLabel id="UDF-select-label">Select Sub Section</InputLabel>
                <Select
                  labelId="subSection-select-label"
                  id="section-subSection"
                  value={subSectionId || ''}
                  label="Select Section"
                  onChange={(e) => setSubSectionId(e.target.value)}
                >
                  {subSectionData?.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option.SubSectionID}>
                        {option.SubSection}
                      </MenuItem>
                    )
                  })}

                </Select>
              </FormControl>
            ) : null
          }
          {
            categoryData.length > 0 ? (
              <FormControl fullWidth margin="normal">
                <InputLabel id="section-category">Select Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="section-category"
                  value={categoryId || ''}
                  label="Select Section"
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {categoryData?.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option.SDTypeId}>
                        {option.Description}
                      </MenuItem>
                    )
                  })}

                </Select>
              </FormControl>
            ) : null
          }
          {
            userList1.length > 0 ? (
              <FormControl fullWidth margin="normal">
                <InputLabel id="section-Description">Select Description</InputLabel>
                <Select
                  labelId="Description-select-label"
                  id="section-Description"
                  value={descriptions || ''}
                  label="Select Section"
                  onChange={(e) => setDescriptions(e.target.value)}
                >
                  {userList1?.map((option, index) => {
                    return (
                      <MenuItem key={index} value={option.Comment}>
                        {option.Comment}
                      </MenuItem>
                    )
                  })}

                </Select>
              </FormControl>
            ) : null
          }
          <FormControl fullWidth margin="normal">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Document Date"
                value={documentDate}
                onChange={(newValue) => setDocumentDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Received On"
                value={receivedDate}
                onChange={(newValue) => setReceivedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            value={descriptions}
            fullWidth
            onChange={(e) => setDescriptions(e.target.value)}
            rows={2}
            defaultValue="Default Value"
          />


          {
            commets.length > 0 && selectedRow ? (
              <>
                <Typography mt={3}>
                  Comments
                </Typography>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="section-Comment">Standard Comment</InputLabel>
                  <Select
                    labelId="Comment-select-label"
                    id="section-Comment"
                    value={comments || ''}
                    label="Select Section"
                    onChange={(e) => setComments(e.target.value)}
                  >
                    {commets?.map((option, index) => {
                      return (
                        <MenuItem key={index} value={option.Comment}>
                          {option.Comment}
                        </MenuItem>
                      )
                    })}

                  </Select>
                </FormControl>
                <TextField
                  id="outlined-multiline-static"
                  label="Comments"
                  multiline
                  value={comments}
                  fullWidth
                  onChange={(e) => setComments(e.target.value)}
                  rows={2}
                  defaultValue="Default Value"
                />
                <FormControl fullWidth margin="normal">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Action By Date"
                      value={actionByDate}
                      onChange={(newValue) => setActionByDate(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>

              </>
            ) : null}
          <Box mt={4}>
            <Button onClick={Json_RegisterItem} variant="contained"> Submit </Button>
          </Box>

        </Box>

        <Box minWidth={{ sm: "fit-content", md: "370px" }} width={{ sm: '100%', md: '30%' }} padding="16px">
          <Typography>Document List</Typography>
          {filename2 && (
            <FormControl fullWidth margin="normal">
              <Box display={'flex'} justifyContent={'space-between'} borderRadius={'4px'} border={'1px solid #cccccc'} padding={1}>
                {filename2}
                <IconButton onClick={handleRemoveFile}
                  aria-label="delete" size="small">
                  <DeleteIcon color='error' fontSize="small" />
                </IconButton>
              </Box>
            </FormControl>
          )}

          {
            udfTable3.length > 0 ? (
              <>
                <FormControl fullWidth margin="normal">
                  <InputLabel id="UDF-select-label">Text Year</InputLabel>
                  <Select
                    labelId="subSection-select-label"
                    id="section-subSection"
                    value={udfId || ''}
                    label="Select Section"
                    onChange={(e) => setUdfId(e.target.value)}
                  >
                    {udfTable3?.map((option, index) => {
                      return (
                        <MenuItem key={index} value={option.UDFID}>
                          {option['Tax Year']}
                        </MenuItem>
                      )
                    })}

                  </Select>
                </FormControl>
                {
                  udfTable4.length > 0 ? (
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="financial-select-label">Financial Year</InputLabel>
                      <Select
                        labelId="financial-select-label"
                        id="section-financial"
                        value={udfId2 || ''}
                        label="Select Section"
                        onChange={(e) => setUdfId2(e.target.value)}
                      >
                        {udfTable4?.map((option, index) => {
                          return (
                            <MenuItem key={index} value={option.UDFID}>
                              {option['Financial Year']}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>) : null}
                <FormControl fullWidth margin="normal">
                  <TextField onChange={(e) => setFromEmail(e.target.value)} value={fromEmail} id="outlined-basic" label="From Email" variant="outlined" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField onChange={(e) => setToEmail(e.target.value)} value={toEmail} id="outlined-basic" label="To Email" variant="outlined" />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField onChange={(e) => setCcEmail(e.target.value)} value={ccEmail} id="outlined-basic" label="CC Email" variant="outlined" />
                </FormControl>
              </>


            ) : null
          }
        </Box>
        <Box overflow={'auto'} width={{ sm: '100%', md: '70%' }} padding="16px">
          {
            userList.length > 0 ? (
              <DataTable setSelectedRow={setSelectedRow} data={userList} />) : <Box  >No Data </Box>
          }
        </Box>
      </Box>

    </Box>
  );
};

export default BasicSelect;
