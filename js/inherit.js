document.writeln(`
	<div id="app">
		<div class="header">
			<div class="header-title">
				<a href="index.html"><h5>东软云医院HIS系统</h5></a>
			</div>
			<div class="header-user">
				<el-dropdown>
				    <el-avatar icon="el-icon-user-solid el-icon-arrow-down"></el-avatar>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item><a href="#">个人中心</a></el-dropdown-item>
				    <el-dropdown-item><a href="#">修改密码</a></el-dropdown-item>
				    <el-dropdown-item><a href="#">退出系统</a></el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="main">
			<div class="nav">
				<el-col>
					<el-menu
					      default-active="2"
					      class="el-menu-vertical-demo"
					      @open="handleOpen"
					      @close="handleClose"
					      background-color="#545c64"
					      text-color="#fff"
					      active-text-color="#ffd04b">
						  <el-submenu index="1">
						    <template slot="title">
						      <i class="el-icon-s-home"></i>
						      <span>挂号收费</span>
						    </template>
						    <el-menu-item-group>
						      <el-menu-item index="1-1">选项1</el-menu-item>
						      <el-menu-item index="1-2">选项2</el-menu-item>
						    </el-menu-item-group>
						    </el-submenu>
						  		  					
						  	<el-submenu index="2">
						  	<template slot="title">
						  	<i class="el-icon-user-solid"></i>
						  	<span>门诊医生</span>
						  	</template>
						  	<el-menu-item-group>
						  	<el-menu-item index="1-1">选项1</el-menu-item>
						  	<el-menu-item index="1-2">选项2</el-menu-item>
						  	<el-menu-item index="1-3">选项1</el-menu-item>
						  	<el-menu-item index="1-4">选项2</el-menu-item>
						  	<el-menu-item index="1-5">选项1</el-menu-item>
						  	<el-menu-item index="1-6">选项2</el-menu-item>
						  	<el-menu-item index="1-7">选项1</el-menu-item>
						  	<el-menu-item index="1-8">选项2</el-menu-item>
						  	<el-menu-item index="1-9">选项1</el-menu-item>
						  	<el-menu-item index="1-10">选项2</el-menu-item>
						  	</el-menu-item-group>
						  	</el-submenu>
						  		  					  
						  	<el-submenu index="3">
						  	<template slot="title">
						  	<i class="el-icon-s-help"></i>
						  	<span>医技处置</span>
						  	</template>
						  	<el-menu-item-group>
						  	<el-menu-item index="1-1">选项1</el-menu-item>
						  	<el-menu-item index="1-2">选项2</el-menu-item>
						  	</el-menu-item-group>
						  	</el-submenu>
							
						  	<el-submenu index="4">
						  	<template slot="title">
						  	<i class="el-icon-s-cooperation"></i>
						  	<span>药房管理</span>
						  	</template>
						  	<el-menu-item-group>
						  	<el-menu-item index="1-1">选项1</el-menu-item>
						  	<el-menu-item index="1-2">选项2</el-menu-item>
						  	</el-menu-item-group>
						  	</el-submenu>
						  		  						  
						  	<el-submenu index="5">
						  	<template slot="title">
						  	<i class="el-icon-s-platform"></i>
						  	<span>财务管理</span>
						  	</template>
						  	<el-menu-item-group>
						  	<el-menu-item index="1-1">选项1</el-menu-item>
						  	<el-menu-item index="1-2">选项2</el-menu-item>
						  	</el-menu-item-group>
						  	</el-submenu>
						  		  							
						  	<el-submenu index="6">
						  	<template slot="title">
						  	<i class="el-icon-menu"></i>
						  	<span>系统信息</span>
						  	</template>
						  	<el-menu-item-group>
						  	<el-menu-item index="1-1">选项1</el-menu-item>
						  	<el-menu-item index="1-2">选项2</el-menu-item>
						  	</el-menu-item-group>
						  	</el-submenu>
					</el-menu>
				</el-col>
			</div> `);