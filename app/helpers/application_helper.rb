module ApplicationHelper
  def active_link_to(text, path, base_classes: "", active_classes: "", additional_classes: "")
    # Determine if the current page is the same as the link's path
    active = current_page?(path) ? active_classes : ""

    # Combine all classes
    all_classes = [base_classes, additional_classes, active].join(' ').strip

    # Return the link_to method with the combined classes
    link_to text, path, class: all_classes
  end
end
