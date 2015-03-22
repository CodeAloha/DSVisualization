	function BinaryTree(head){
		this.head = head;
		this.depth = 0;
		this.totalNodes = 0;
		this.totalSum = 0;
	}

	/*
		Helper Functions
	*/

	BinaryTree.prototype.generateTree = function(n, r){
		if( !Number.isInteger(n) )
		{
			throw { 
			    name:        "Value Provided is not an Integer", 
			    level:       "Runtime", 
			    message:     "Error: Integer Required for parameter generateTree(n, _).",
			    toString:    function(){return this.name + ": " + this.message;} 
			}; 
		}
		else
		{
			console.log("Generating Tree with " + n + " nodes.");
		}


		var lastNode 	= null;
		for(var i=0; i < n; i++)
		{
			var randomValue = Math.round( Math.random() * 100 );

			if(i == 0)
			{
				var node = new Node(randomValue);
				this.head = node;
				lastNode = node;
			}
			else
			{
				var node = new Node(randomValue);
				if( !lastNode.leftNode )
					lastNode.setLeftNode( node );
				else if( !lastNode.rightNode )
					lastNode.setRightNode( node );
				lastNode = node;
			}
		}
		
	}
