class Bot {
	constructor() {
		this.prev_key = null
		this.dangerVertical = false
		this.dangerHorizontal = false
		this.danger = false
		this.danger_moving_horizontal = false
		this.danger_moving_vertical = false
	}


	checkDanger(p4, elem) {
		let xdiff = Math.abs(elem.x - p4.x)
		let ydiff = Math.abs(elem.y - p4.y)
		var distance_to_enemy = Math.sqrt(Math.pow(xdiff, 2) + Math.pow(ydiff, 2))
		if (distance_to_enemy <= 120) {
			if (p4.check_x_coordinate(elem)) {
				this.dangerVertical = true
			} if (p4.check_y_coordinate(elem)) {
				this.dangerHorizontal = true
			}
			if (elem.xspeed != 0) {
				this.danger_moving_horizontal = true
			} else {
				this.danger_moving_vertical = true
			}
			this.danger = true
		}
	}


	horizontal_instruction(p4, gold) {
		let instruction
		if ((gold.x - p4.x) > 0) {
			instruction = "right"
		} else {
			instruction = "left"
		}
		return { prev_key: this.prev_key, new_key: instruction }
	}

	vertical_instruction(p4, gold) {
		let instruction
		if ((gold.y - p4.y) > 0) {
			instruction = "down"
		} else {
			instruction = "up"
		}
		return { prev_key: this.prev_key, new_key: instruction }
	}

	find_gold(p4, gold) {
		var shouldY = p4.check_y_coordinate(gold)
		if (shouldY) {
			return this.horizontal_instruction(p4, gold)
		} else {
			return this.vertical_instruction(p4, gold)
		}
	}

	resetDanger() {
		this.danger = false
		this.dangerHorizontal = false
		this.dangerVertical = false
		this.danger_moving_horizontal = false
		this.danger_moving_vertical = false
	}

	instruction(p4, gold) {
		let instruction = this.find_gold(p4, gold)
		// if (p4.isMovingRight || p4.isMovingLeft) {
		// 	if (!this.dangerHorizontal && this.danger_moving_vertical) {
		// 		instruction = { prev_key: this.prev_key, new_key: 'pause' }
		// 	} else if (this.dangerHorizontal && !this.dangerVertical) {
		// 		instruction = { prev_key: this.prev_key, new_key: Math.random() >= 0.5 ? "up" : "down" }
		// 	} else if (this.dangerVertical && !this.dangerHorizontal) {
		// 		instruction = { prev_key: this.prev_key, new_key: (Math.random() >= 0.5) ? "right" : "left" }
		// 	}//else move diagonal..later
		// 	else { //not dangerous
		// 		instruction = this.find_gold(p4, gold)
		// 	}
		// } else if (p4.isMovingUp || p4.isMovingDown) {
		// 	if (!this.dangerVertical && this.danger_moving_horizontal) {
		// 		instruction = { prev_key: this.prev_key, new_key: 'pause' }
		// 	} else if (this.dangerVertical && !this.dangerHorizontal) {
		// 		instruction = { prev_key: this.prev_key, new_key: (Math.random() >= 0.5) ? "right" : "left" }
		// 	} else if (this.dangerHorizontal && !this.dangerVertical) {
		// 		instruction = { prev_key: this.prev_key, new_key: (Math.random() >= 0.5) ? "up" : "down" }
		// 	}
		// 	else {
		// 		instruction = this.find_gold(p4, gold)
		// 	}
		// } else { //if paused
		// 	if (this.dangerHorizontal && !this.dangerVertical) {
		// 		instruction = { prev_key: this.prev_key, new_key: (Math.random() >= 0.5) ? "up" : "down" }
		// 	} else if (this.dangerVertical && !this.dangerHorizontal) {
		// 		instruction = { prev_key: this.prev_key, new_key: (Math.random() >= 0.5) ? "right" : "left" }
		// 	} else if ((this.danger_moving_horizontal || this.danger_moving_vertical) && (!this.dangerVertical && !this.dangerHorizontal)) {
		// 		instruction = { prev_key: this.prev_key, new_key: 'pause' }
		// 	} else {
		// 		instruction = this.find_gold(p4, gold)
		// 	}
		// }
		if (instruction) {
			//move bot
			this.prev_key = instruction.new_key
			if (instruction.prev_key !== this.prev_key) {
				p4.isMovingUp = false
				p4.isMovingDown = false
				p4.isMovingLeft = false
				p4.isMovingRight = false
				p4.move(instruction.new_key)
			}
		}
		this.resetDanger()
	}
}

export { Bot }