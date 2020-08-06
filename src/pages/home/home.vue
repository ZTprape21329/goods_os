<template>
    <div class="home">
        <!-- <div>
            <h1>商家概况</h1>
        </div>-->
        <div class="title">
            <h3>信息统计</h3>
        </div>
        <div class="header">
            <el-row :gutter="24">
                <el-col :span="4">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-row>
        </div>
		<el-row :gutter="24">
			<el-col :span="6">
				<div class="countPrice kuang1">
					<p class="countTitle">成交总金额(元)</p>
					<div class="count">9,999,999</div>
					<p class="countNum">昨日99</p>
					<div></div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="countPrice kuang2">
					<p class="countTitle">成交总笔数</p>
					<div class="count">9,999,999</div>
					<p class="countNum">昨日99</p>
					<div></div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="countPrice kuang3">
					<p class="countTitle">新增顾客数</p>
					<div class="count">9,999,999</div>
					<p class="countNum">昨日99</p>
					<div></div>
				</div>
			</el-col>
			<el-col :span="6">
				<div class="countPrice kuang4">
					<p class="countTitle">卡券使用数</p>
					<div class="count">9,999,999</div>
					<p class="countNum">昨日99</p>
					<div></div>
				</div>
			</el-col>
		</el-row>
		<!-- 数据图 -->
		<div>
			<div class="title">
				<h3>数据图</h3>
			</div>
			<div>
				<home-echart></home-echart>
			</div>
		</div>
		<!-- 数据报表 -->
		<div>
			<div class="title">
				<h3>数据报表</h3>
			</div>
		</div>
		<!-- 表格 -->
		<div class="priceTable">
			<el-table
    		:data="tableData"
    		stripe
    		style="width: 100%">
				<el-table-column prop="index" label="序号"></el-table-column>
				<el-table-column prop="date" label="日期"></el-table-column>
				<el-table-column prop="price" label="成交金额(元)"></el-table-column>
				<el-table-column prop="count" label="消费笔数"></el-table-column>
  			</el-table>
			<el-pagination
				class="pagination"
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[100, 200, 300, 400]"
				:page-size="100"
				layout="total, sizes, prev, pager, next, jumper"
				:total="400">
			</el-pagination>
		</div>
    </div>
</template>
<script>
import homeEchart from './echarts/echarts';
export default {
	components: {
		homeEchart
	},
    data() {
        return {
			currentPage: 4,
           options: [{
          value: '1',
          label: '今日'
        }, {
          value: '2',
          label: '昨日'
        }, {
          value: '3',
          label: '近七日'
        }, {
          value: '4',
          label: '近30日'
        }, {
          value: '5',
          label: '近半年'
		}, {
		  value: '6',
		  label: '近一年'	
		}],
		value: '',
		tableData: [{
		  index: 1,
          date: '2016-05-02',
          price: 500,
          count: 10
        }, {
	      index:2,		
          date: '2016-05-04',
          price: 700,
          count: 2
        }, {
	      index:3,		
          date: '2016-05-01',
          price: 1000,
          count: 29
        }, {
	      index:4,		
          date: '2016-05-03',
          price: 58,
          count: 10
        }]
        };
	},
	methods: {
		handleSizeChange(val) {

      	},
      	handleCurrentChange(val) {

      	}
	}
};
</script>

<style lang="scss" scoped>
	.home{
		.header{
			background: #f5f5f5;
			padding: 10px;
		}
		.title{
			color: #75CAC7;
			font-weight: 400;
		}
	.countPrice{
		height: 200px;
		margin-top: 20px;
		color: white;
		text-align: center;
		border-radius: 3px;
		.count, .countNum, .countTitle{
			padding: 10px;
		}
		.countTitle{
			font-size: 20px;
		}
		.count{
			font-weight: 600;
			font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		}
	}
	.kuang1{
		background: rgb(255, 177, 74);
	}
	.kuang2{
		background: #00B467;
	}
	.kuang3{
		background: #00A4E2;
	}
	.kuang4{
		background: #EF005E;
	}
	.priceTable{
		.pagination{
			margin: 10px 0 20px 0;
		}
	}
	}
</style>

