<template>
	<div class="user-content">
		<a-card class="table-card">
			<template #title>
				<div class="title-box">
					<div class="title">用户列表</div>
					<div class="createUserBtn">
						<a-button type="primary">新建用户</a-button>
					</div>
				</div>
			</template>
			<a-table :dataSource="userList" :columns="columns" bordered>
				<template #name="{ name }">{{ name }}</template>

				<template #operation>
					<a-button type="text" size="small">
						<EditOutlined />
						编辑
					</a-button>
					<a-button type="text" danger size="small">
						<DeleteOutlined />
						删除
					</a-button>
				</template>
			</a-table>

		</a-card>
	</div>
</template>

<script setup lang="ts">
import {
	useUserStore
} from '@/stores/main/user';
import { storeToRefs } from "pinia"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue"

const userStore = useUserStore()
userStore.getUserListAction()
const { userList } = storeToRefs(userStore)
console.log(userList, 'aaa')

const columns = [
	{
		title: '用户名',
		dataIndex: 'name',
		key: 'name',
		align: 'center'
	},
	{
		title: '真实名字',
		dataIndex: 'realname',
		key: 'realname',
		align: 'center'
	},
	{
		title: '手机号码',
		dataIndex: 'cellphone',
		key: 'cellphone',
		align: 'center'
	},
	{
		title: '状态',
		dataIndex: 'enable',
		key: 'enable',
		align: 'center'
	},
	{
		title: '创建时间',
		dataIndex: 'createAt',
		key: 'crreateAt',
		align: 'center'
	},
	{
		title: '更新时间',
		dataIndex: 'updateAt',
		key: 'updateAt',
		align: 'center'
	},
	{
		title: '操作',
		align: 'center',
		slots: { customRender: 'operation' },
	}
]

// const userListData = [
// 	{
// 		key: '1',
// 		name: '胡彦斌',
// 		age: 32,
// 		address: '西湖区湖底公园1号',
// 		index: '123'
// 	},
// 	{
// 		key: '2',
// 		name: '胡彦祖',
// 		age: 42,
// 		address: '西湖区湖底公园1号',
// 	},
// ]
</script>

<style scoped lang="less">
.title-box {
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		font-size: 15px;
	}
}
</style>
