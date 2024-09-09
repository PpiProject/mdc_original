import Realtime from "@/components/Realtime";
import Tablee from "@/components/Tablee";
import deviceList from "@/components/deviceList";
import deviceNew from "@/components/deviceNew";
import LineChart from "@/components/LineChart";
import DataTable from "@/components/DataTable";
import Settings from "@/components/Settings";
import SettingsStr from "@/components/SettingsStr";
import Machinecard from "@/components/Machinecard";
import Report from "@/components/Report";
import jurnal from "@/components/jurnal";
import settingsPanel from "@/components/settingsPanel";

const routes = [
    {
        path: '/',
        name: 'Realtime',
        component: Realtime,
    },
    {
        path: '/Tablee',
        name: 'Tablee',
        component: Tablee,
    },
    {
        path: '/deviceList',
        name: 'deviceList',
        component: deviceList,
    },
    {
        path: '/deviceNew',
        name: 'deviceNew',
        component: deviceNew,
    },
    {
        path: '/Linechart',
        name: 'Linechart',
        component: LineChart,
    },
    {
        path: '/DataTable',
        name: 'DataTable',
        component: DataTable,
    },

    {
        path: '/SettingsStr',
        name: 'SettingsStr',
        component: SettingsStr,
    },
    {
        path: '/Machinecard',
        name: 'Machinecard',
        component: Machinecard,
    },
    {
        path: '/Report',
        name: 'Report',
        component: Report,
    },
    {
        path: '/Settings',
        name: 'Settings',
        component: Settings,
    },
    {
        path: '/jurnal',
        name: 'jurnal',
        component: jurnal,
    },
    {
        path: '/settingsPanel',
        name: 'settingsPanel',
        component: settingsPanel,
    },
]

export default routes;