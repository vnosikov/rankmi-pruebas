def update_user user_data
	begin
		user = (user_data[:id].nil?) ? User.new : User.find(user_id)

		return false unless user.save
		status = true

		if user_role.present? && process_id.present? && user_id.present?
		
			if UserRoleProcess.where(user_id: user_id, role_id: user_role, enterprise_process_id: process_id).empty?

	      		status = UserRoleProcess.create(user_id: user_id,role_id: user_role.to_i, enterprise_process_id: process_id.to_i)
			end
		end
		
		if status && area_id.present?

			if UserEnterpriseArea.where(user_id: user_id, enterprise_area_id: area_id.to_i).first.empty?
				
				status = UserEnterpriseArea.create(user_id: user_id, enterprise_area_id: area_id.to_i)
				
			end

		end

		return status

	rescue Exception => e
		#Manejo de excepción
	end
end