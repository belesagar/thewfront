
	<div class="m-grid__item m-grid__item--fluid m-wrapper">
    	<!-- <div class="m-subheader ">
			<div class="d-flex align-items-center">
				<div class="mr-auto">
					<h3 class="m-subheader__title">
						Change Password
					</h3>								
				</div>							
			</div>
		</div> -->

		<div class="m-content">
			<div class="row">
				
				<div class="col-xl-12 col-lg-12">
					<div class="m-portlet m-portlet--full-height m-portlet--tabs ">
						<div class="m-portlet__head">
							<div class="m-portlet__head-tools">	
								<div class="headingpage">
									<i class="flaticon-lock-1"></i>
									Franchise User List	
									<a href="#" class="btn btn-accent m-btn m-btn--air m-btn--custom purplebtn createbtn">
										Create User
									</a>
								</div>											
							</div>										
						</div>
							
						<div class="m-portlet__body">
							
							<div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
								<div class="row align-items-center">
									<div class="col-xl-8 order-2 order-xl-1">
										<div class="form-group m-form__group row align-items-center">
											<div class="col-md-4">
												<div class="m-input-icon m-input-icon--left">
													<input type="text" class="form-control m-input m-input--solid" placeholder="Search..." id="m_form_search">
													<span class="m-input-icon__icon m-input-icon__icon--left">
														<span>
															<i class="la la-search"></i>
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							<div class="tab-content userlistbx">
								<div class="tab-pane active " id="m_user_profile_tab_1">
									<table class="table table-bordered table-hover m-datatable" id="html_table">
										<thead class="text-primary">
											<th>No.</th>
											<th>Name</th>
											<th>Email</th>
											<th>Mobile No.</th>
											<th>Role</th>
											<th>Action</th>										
										</thead>
										<tbody> 
											
												<tr id="row-">
													<td></td> 
													<td></td> 
													<td></td> 
													<td></td> 
													<td></td> 
													<td>
														<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill editbtn" title="Edit">
															<i class="la la-edit"></i>                  
														</a>																									
													</td> 											
												</tr>
											
										</tbody> 
										
									</table>
								</div>
								<!-- <div class="tab-pane active" id="m_user_profile_tab_2"></div> -->
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
	</div>



<script src="{{asset('public/admin/js/html-table.js')}}" type="text/javascript"></script>
<!-- <script type="text/javascript">$('#example').DataTable(); </script> -->
<!-- <script src="{{asset('public/admin/js/table.js')}}" type="text/javascript"></script> -->

