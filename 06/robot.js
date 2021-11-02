Robot = function(x, y, z){

	// constructor
	console.log('new robot');
	// creating the head
	this.head = new THREE.Bone();
	// postion
	this.head.postion.x = x;
	this.head.postion.y = y;
	this.head.postion.z = z;


	//NECK 
	this.neck = new THREE.Bone(); // creating the Bone
	this.neck.postion.y = -10 // relative to the head
	this.head.add(this.neck); // attach the neck to the head



	this.torso = new THREE.Bone();
	this.torso.postion.y = -40; //relative to the head
	this.neck.add(this.torso); // attach the torso to the neck


		// other limbs

	// arms L and R
	this.left_upper_arm = new THREE.Bone();
	this.left_upper_arm.postion.y = -5;
	this.left_upper_arm.postion.x = 5;
	this.neck.add(this.left_upper_arm); // attach the limb to the neck

	this.left_lower_arm = new THREE.Bone();
	this.left_lower_arm.postion.y = -15;
	this.left_lower_arm.postion.x = 5;
	this.left_upper_arm.add(this.left_lower_arm); // attach lower arm to upper arm

	this.left_hand = new THREE.Bone();
	this.left_hand.postion.y = -5;
	this.left_hand.postion.x = 5;
	this.left_lower_arm.add(this.hand);

	this.right_upper_arm = new THREE.Bone();
	this.right_upper_arm.postion.y = -5;
	this.right_upper_arm.postion.x = -5;
	this.neck.add(this.right_upper_arm); // attach the limb to the neck

	this.right_lower_arm = new THREE.Bone();
	this.right_lower_arm.postion.y = -15;
	this.right_lower_arm.postion.x = -5;
	this.right_upper_arm.add(this.right_lower_arm); // attach lower arm to upper arm

	this.right_hand = new THREE.Bone();
	this.right_hand.postion.y = -5;
	this.right_hand.postion.x = -5;
	this.right_lower_arm.add(this.right_hand);

	// legs L and R 

	this.left_upper_leg = new THREE.Bone();
	this.left_upper_leg.postion.y = -5;
	this.left_upper_leg.postion.x = 5;
	this.torso.add(this.left_upper_leg);

	this.left_lower_leg = new THREE.Bone();
	this.left_lower_leg.postion.y = -15;
	this.left_lower_leg.postion.x = 5;
	this.left_upper_leg.add(this.left_lower_leg);

	this.left_foot = new THREE Bone();
	this.left_foot.postion.y = -5;
	this.left_foot.postion.x = 5;
	this.left_lower_leg.add(this.left_foot);


	this.right_upper_leg = new THREE.Bone();
	this.right_upper_leg.postion.y = -5;
	this.right_upper_leg.postion.x = -5;
	this.torso.add(this.right_upper_leg); // attach the limb to the neck

	this.right_lower_leg = new THREE.Bone();
	this.right_lower_leg.postion.y = -15;
	this.right_lower_leg.postion.x = -5;
	this.right_upper_leg.add(this.right_lower_leg); // attach lower arm to upper arm

	this.right_foot = new THREE.Bone();
	this.right_foot.postion.y = -5;
	this.right_foot.postion.x = -5;
	this.right_lower_foot.add(this.right_foot);

 
};

Robot.prototype.show = function(scene) {
	console.log(this.neck.postion);

	rGroup = new THREE.Group();
	rGroup.add(this.head);
	scene.add(rGroup);

	helper = new THREE.SkeletenHelper(rGroup)
	helper.material.linewidth = 3; // make the skeleton thick
	scene.add(rGroup);
	scene.add(helper);


};

	









