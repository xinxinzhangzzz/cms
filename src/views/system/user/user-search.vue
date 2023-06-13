<template>
	<div class="search">

		<a-card class="search-card">

			<!-- 搜索表单 -->
			<a-form ref="form" :model="searchForm" :label-col="labelCol" :rules="rules">
				<a-row :gutter="100">
					<a-col :span="8">
						<a-form-item label="用户名" name="name">
							<a-input v-model:value="searchForm.name" placeholder="请输入用户名"></a-input>
						</a-form-item>
					</a-col>
					<a-col :span="8">
						<a-form-item label="真实姓名" name="realname">
							<a-input v-model:value="searchForm.realname" placeholder="请输入真实姓名"></a-input>
						</a-form-item>
					</a-col>
					<a-col :span="8">
						<a-form-item label="手机号码" name="cellphone">
							<a-input v-model:value="searchForm.cellphone" placeholder="请输入手机号码"></a-input>
						</a-form-item>
					</a-col>
				</a-row>

				<a-row :gutter="100">
					<a-col :span="8">
						<a-form-item label="状态" name="enable">
							<a-select v-model:value="searchForm.enable" placeholder="请选择状态">
								<a-select-option value="0">禁用</a-select-option>
								<a-select-option value="1">启用</a-select-option>
							</a-select>
						</a-form-item>
					</a-col>
					<a-col :span="16">
						<a-form-item label="创建时间" name="createAt">
							<a-space direction="vertical">
								<a-range-picker v-model:value="searchForm.createAt" />
							</a-space>
						</a-form-item>
					</a-col>
				</a-row>

				<a-row class="btnRow" align="end" :gutter="10">
					<a-col>
						<a-button @click="resetBtnClick">
							<template #icon>
								<SyncOutlined />
							</template>
							重置
						</a-button>
					</a-col>
					<a-col>
						<a-button type="primary">
							<template #icon>
								<FileSearchOutlined />
							</template>
							查询
						</a-button>
					</a-col>
				</a-row>
			</a-form>
		</a-card>

	</div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
import { SyncOutlined, FileSearchOutlined } from "@ant-design/icons-vue"

const form = ref()
const searchForm = ref({
	name: '',
	realname: '',
	cellphone: '',
	enable: '0',
	createAt: ''
})

const labelCol = {
	style: { width: '80px' }
}

const rules = {
	name: [
		{ required: true, message: "用户名不能为空!", trigger: 'blur' }
	],
	realname: [
		{ required: true, message: "真实姓名不能为空!", trigger: 'blur' }
	],
	cellphone: [
		{ required: true, message: "手机号码不能为空!", trigger: 'blur' }
	],
	enable: [
		{ required: true, message: "请选择状态!", trigger: 'blur' }
	],
	createAt: [
		{ required: true, message: "请选择创建日期!", trigger: 'blur' }
	]
}

const resetBtnClick = () => {
	unref(form).resetFields()
}
</script>

<style scoped lang="less">
.search-card {
	margin-bottom: 20px;
	width: 100%;
}

.ant-form-item {
	margin-bottom: 0;
	padding: 0 20px 30px 20px;
}

.btnRow {
	margin-right: 20px !important;
}
</style>
