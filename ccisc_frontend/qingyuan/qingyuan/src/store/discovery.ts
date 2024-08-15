import { defineStore } from 'pinia'
import { reactive } from 'vue'
import defaultTableDate from '@/assets/example_discovery.json'

export const useDiscoveryStore = defineStore('discovery', () => {
    const discoveryTableData = reactive(defaultTableDate)

    const setDiscoveryTableData = (data: any) => {
        discoveryTableData.library = data.library
        discoveryTableData.tableData1 = data.tableData1
        discoveryTableData.tableData2 = data.tableData2
    }

    return {
        discoveryTableData,
        setDiscoveryTableData
    }
})