<template>
	<div>
		<el-container>
		  <el-header>点餐页面</el-header>
		  <el-main>
		  	<el-row>
		  		<el-col :span="4">
		  			<el-button 
		  				type="primary" 
		  				icon="el-icon-plus"
		  				@click="addMyOrder"
		  				:disabled="multipleSelection.length===0"
		  				size="small">新增订单</el-button>
		  		</el-col>
		  	</el-row>
		  	<el-table
			    :data="tableData"
			    v-loading="loading"
			     @selection-change="handleSelectionChange"
			    style="width: 100%">
			    <el-table-column
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			      label="店铺ID">
			      <template slot-scope="scope">
			        <span style="margin-left: 10px">{{ scope.row.id }}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="店铺名称">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="店铺地址">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="电话">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="经营时间">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="配送时间">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="综合评分">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="配送价">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="类别">
			      <template slot-scope="scope">
			        <span>{{scope.row.name}}</span>
			      </template>
			    </el-table-column>
			  </el-table>
		  </el-main>
		</el-container>
	</div>
</template>
<script>
	import {getAllMenus, addOrder} from '../model/client-model.js'
	export default {
		name: 'userorder',
		data () {
			return {
				loading: true,
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
        multipleSelection: []
			}
		},
		methods: {
			handleSelectionChange (val) {
				this.multipleSelection = val
			},
			addMyOrder () {
				addOrder(this.multipleSelection)
					.then(res => {
						this.$message({
				          message: '新增订单成功',
				          type: 'success'
				        });
				        this.getMenus();
					})
					.catch(err => {
						this.$message.error('新增订单失败');
					})
			},
			getMenus () {
				getAllMenus()
					.then(data => {
						this.loading = false;
					})
					.catch(err => {
						this.loading = false;
					})
			}
		},
		mounted () {
			this.getMenus();
		}
	}
</script>
<style>
</style>