<template>
	<div>
		<el-container>
		  <el-header>点餐页面</el-header>
		  <el-tabs style="padding:0 20px;" v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="热门菜品推荐" name="first">
		    	<el-main>
				  	<el-table
					    :data="tableData"
					    v-loading="loading"
					    style="width: 100%">
					    <el-table-column
					      label="店铺ID">
					      <template slot-scope="scope">
					        <span style="margin-left: 10px">{{ scope.row.id }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="店名">
					      <template slot-scope="scope">
					        <span>{{scope.row.shopname}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="菜名">
					      <template slot-scope="scope">
					        <span>{{scope.row.food_name}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="地址">
					      <template slot-scope="scope">
					        <span>{{scope.row.address}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="营业时间">
					      <template slot-scope="scope">
					        <span>{{scope.row.open_time}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="配送时间">
					      <template slot-scope="scope">
					        <span>{{scope.row.delivery_time}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="大众评分">
					      <template slot-scope="scope">
					        <span>{{scope.row.scores}}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="价格">
					      <template slot-scope="scope">
					        <span>{{scope.row.price}}</span>
					      </template>
					    </el-table-column>
					  </el-table>
				  </el-main>
		    </el-tab-pane>
		    <el-tab-pane label="新增订单" name="second">
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
		    </el-tab-pane>
		  </el-tabs>
		  
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
				activeName: 'first',
				tableData: [
					
        ],
        multipleSelection: []
			}
		},
		methods: {
			handleSelectionChange (val) {
				this.multipleSelection = val
			},
			handleClick(tab, event) {
        if(this.activeName === 'first') {

        } else {
        	
        }
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