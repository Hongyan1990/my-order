<template>
	<div>
		<el-container>
		  <el-header>管理页面</el-header>
		  <el-main>
		  	<el-row>
		  		<el-col :span="4">
		  			<el-button 
		  				type="primary" 
		  				icon="el-icon-plus"
		  				size="small"
		  				@click="dialogFormVisible=true">添加菜单</el-button>
		  		</el-col>
		  	</el-row>
		  	<el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      label="日期"
			      width="180">
			      <template slot-scope="scope">
			        <span style="margin-left: 10px">{{ scope.row.date }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="姓名"
			      width="180">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		  </el-main>
		</el-container>
		<add-menu 
			:isShowDialog="dialogFormVisible" 
			@closeCreateMenuDialog="closeCreateMenuDialog">
		</add-menu>
	</div>
</template>
<script>
	import AddMenu from './AddMenu.vue'
	export default {
		name: 'order',
		components: {
			AddMenu
		},
		data () {
			return {
				tableData: [
					{
			          	date: '2016-05-02',
			          	name: '王小虎',
			          	address: '上海市普陀区金沙江路 1518 弄'
			        }, {
			          	date: '2016-05-04',
			          	name: '王小虎',
			          	address: '上海市普陀区金沙江路 1517 弄'
			        }, {
			          	date: '2016-05-01',
			          	name: '王小虎',
			          	address: '上海市普陀区金沙江路 1519 弄'
			        }, {
			          	date: '2016-05-03',
			          	name: '王小虎',
			          	address: '上海市普陀区金沙江路 1516 弄'
			        }
		        ],
		        dialogFormVisible: false
			}
		},
		methods: {
			handleEdit(i, data) {},
			handleDelete(i, data) {},
			closeCreateMenuDialog () {
				this.dialogFormVisible = false;
			}
		}
	}
</script>