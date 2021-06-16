package org.iesalixar.agarciam.proyectofinaldaw.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="business")
public class Business {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String name;
	
	@Column
	private String address;
	
	@Column
	private String cif;
	
	@Column
	private int phoneNumber;
	
	@Column
	private String url_img;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@ManyToOne
	@JoinColumn(name="rolBusiness_id")
	private Rol rolBusiness;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	@OneToMany(mappedBy="business")
	private Set<User> users;

	public Business() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCif() {
		return cif;
	}

	public void setCif(String cif) {
		this.cif = cif;
	}

	public int getPhone_number() {
		return phoneNumber;
	}

	public void setPhone_number(int phone_number) {
		this.phoneNumber = phone_number;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUrl_img() {
		return url_img;
	}

	public void setUrl_img(String url_img) {
		this.url_img = url_img;
	}

	public Rol getRolBusiness() {
		return rolBusiness;
	}

	public void setRolBusiness(Rol rolBusiness) {
		this.rolBusiness = rolBusiness;
	}

	public Rol getRole() {
		return rolBusiness;
	}

	public void setRole(Rol rolBusiness) {
		this.rolBusiness = rolBusiness;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		result = prime * result + ((cif == null) ? 0 : cif.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + phoneNumber;
		result = prime * result + ((rolBusiness == null) ? 0 : rolBusiness.hashCode());
		result = prime * result + ((url_img == null) ? 0 : url_img.hashCode());
		result = prime * result + ((users == null) ? 0 : users.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Business other = (Business) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (cif == null) {
			if (other.cif != null)
				return false;
		} else if (!cif.equals(other.cif))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (phoneNumber != other.phoneNumber)
			return false;
		if (rolBusiness == null) {
			if (other.rolBusiness != null)
				return false;
		} else if (!rolBusiness.equals(other.rolBusiness))
			return false;
		if (url_img == null) {
			if (other.url_img != null)
				return false;
		} else if (!url_img.equals(other.url_img))
			return false;
		if (users == null) {
			if (other.users != null)
				return false;
		} else if (!users.equals(other.users))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Business [id=" + id + ", name=" + name + ", address=" + address + ", cif=" + cif + ", phoneNumber="
				+ phoneNumber + ", url_img=" + url_img + "]";
	}

}
