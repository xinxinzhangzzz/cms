<template>
	<div class="Breadcrumb">
		<a-breadcrumb>
			<template v-for="item in breadcrumbs" :key="item.name">
				<a-breadcrumb-item>
					<router-link :to="item.path">{{ item.name }}</router-link>
				</a-breadcrumb-item>
			</template>
		</a-breadcrumb>
	</div>
</template>

<script setup lang="ts">
import { mapPathToBreadcrumb } from "@/utils/mapPathToBreadcrumb"
import useLoginStore from "@/stores/login";
import { useRoute } from "vue-router";
import { computed } from "vue";

const loginStore = useLoginStore()
const route = useRoute()

const breadcrumbs = computed(() => mapPathToBreadcrumb(route.path, loginStore.userMenusList))
</script>

<style scoped lang="less"></style>
