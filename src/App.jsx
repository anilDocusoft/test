
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

const BasicSelect = () => {
  const [projectId, setProjectId] = useState('171');
  const [folderName, setFolderName] = useState('171');
  const [SectionId, setSectionId] = useState('');
  const [sectionName, setSectionName] = useState('');
  const [UDFValue, setUDFValue] = useState('');
  const [subSectionId, setSubSectionId] = useState('');
  const [folderData, setFoldersData] = useState({ Table: [] });
  const [foldersData1, setFoldersData1] = useState({ Table: [] });
  const [sectionData, setSectionData] = useState({ Table: [] });
  const [clientByFolder, setClientByFolder] = useState({ Table: [] });
  const [subSectionData, setSubSectionData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [UDFata, setUDFData] = useState({ Table: [] });
  const [documentDate, setDocumentDate] = useState(dayjs('2024-04-17'));
  const [receivedDate, setReceivedDate] = useState(dayjs('2024-04-17'));
  const [file2, setFile2] = useState(null);
  const [filename2, setFilename2] = useState('');
  const [fileBase64, setFileBase64] = useState('');
  const [descriptions, setDescriptions] = useState()


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
        setUDFData(data);
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
        setClientByFolder(data);
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
        if (data.Table1) {
          setUserList(data?.Table1 || []);
        } else if (data.Table2) {
          setUserList(data?.Table2 || []);
        }
        else {
          setUserList(data?.Table || [])
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
        setClientByFolder(data);
      }
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };
  const Json_RegisterItem = async (e) => {
    e.preventDefault();
    try {
      const response = await testApi.Json_RegisterItem({
        Email: 'patrick@docusoft.net',
        password: 'UGF0cmljazEyMy4=',
        agrno: "0003",
        EmailMessageId: "",
        actionByDate: "",
        actionDate: "",
        categoryId: 0,
        clientname: "FERN AND FARROW LTD Edit",
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
  useEffect(() => {
    getFolders();
    getSections('171')
    getUDF('171')
    Json_GetFolderData()
  }, []);

  console.log(foldersData1,);

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

        <Box minWidth={'370px'} width={{ sm: '100%', md: '30%' }} padding="16px">
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
              {sectionData.Table.map((option, index) => {
                return (
                  <MenuItem key={index} value={option.SecID}>
                    {option.Sec}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="UDF-select-label">Select Reference</InputLabel>
            <Select
              labelId="UDF-select-label"
              id="section-UDF"
              value={UDFValue || ''}
              label="Select Section"
              onChange={(e) => setUDFValue(e.target.value)}
            >
              {UDFata.Table.map((option, index) => {
                return (
                  <MenuItem key={index} value={option.SecID}>
                    {option.Sec}
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
            fullWidth
            onChange={(e) => setDescriptions(e.target.value)}
            rows={4}
            defaultValue="Default Value"
          />
          <Box mt={4}>
            <Button onClick={Json_RegisterItem} variant="contained"> Submit </Button>
          </Box>

        </Box>
        <Box overflow={'auto'} width={{ sm: '100%', md: '70%' }} padding="16px">
          {
            userList.length > 0 ? (
              <DataTable data={userList} />) : <Box  >No Data </Box>
          }
        </Box>
      </Box>

    </Box>
  );
};

export default BasicSelect;
