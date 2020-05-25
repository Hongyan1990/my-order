<template>
	<div>
		<el-dialog  :close-on-click-modal="false" title="创建菜单" :visible.sync="dialogVisibale">
	       <el-form  label-width="70px"  :inline="true" :model="form"  class="demo-form-inline">
		    <el-form-item label="店铺名称">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="店铺地址">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="电话">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="经营时间">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="配送时间">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="综合评分">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="起送价">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="类别">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		  </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="closeAddMenuDialog">取 消</el-button>
	        <el-button type="primary" @click="addMenu" :disabled="validateErr">确 定</el-button>
	      </div>
	    </el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'addmenu',
		props: {
	      isShowDialog: {
	        type: Boolean,
	        default: false
	      }
	    },
		data () {
			return {
				form: {
					name: ''
				},
				formLabelWidth: '100px',
				validateErr: false,
				validateMsg: ''
			}
		},
		computed: {
	      dialogVisibale: {
	        get () {
	          return this.isShowDialog
	        },
	        set () {
	          this.$emit('closeCreateMenuDialog')
	        }
	      }
	    },
	    methods: {
	    	closeAddMenuDialog () {
	    		this.$emit('closeCreateMenuDialog')
	    	},
	    	addMenu () {

	    	}
	    }
	}

</script>
<style>
  .err-tip {
    color: red;
    margin-bottom: 10px;
    display: inline-block;
  }
</style>